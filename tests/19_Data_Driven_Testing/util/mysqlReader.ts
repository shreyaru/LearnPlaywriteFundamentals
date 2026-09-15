import mysql from 'mysql2/promise';

export interface RegistrationData {
    description: string;
    name: string;
    username: string;
    password: string;
    confirmPassword: string;
    shouldPass: boolean;
    expectedError: string;
}

export interface MySQLConfig {
    host: string;
    port?: number;
    user: string;
    password: string;
    database: string;
}

/**
 * Reads test data from a MySQL table.
 *
 * @param config  - MySQL connection configuration
 * @param query   - SQL query to execute (e.g. 'SELECT * FROM registration_data')
 * @returns         Array of RegistrationData rows
 *
 * @example
 * ```ts
 * const data = await readMySQL(
 *   { host: 'localhost', user: 'root', password: 'root', database: 'testdb' },
 *   'SELECT * FROM registration_data'
 * );
 * ```
 */
export async function readMySQL(config: MySQLConfig, query: string): Promise<RegistrationData[]> {
    const connection = await mysql.createConnection({
        host: config.host,
        port: config.port ?? 3306,
        user: config.user,
        password: config.password,
        database: config.database,
    });

    try {
        const [rows] = await connection.execute(query);
        return rows as RegistrationData[];
    } finally {
        await connection.end();
    }
}

/**
 * Helper: SQL to create the registration_data table in MySQL.
 *
 * Run this once to set up your database before using the DDT MySQL test.
 *
 * ```sql
 * CREATE TABLE IF NOT EXISTS registration_data (
 *     id INT AUTO_INCREMENT PRIMARY KEY,
 *     description VARCHAR(255) NOT NULL,
 *     name VARCHAR(255) NOT NULL,
 *     username VARCHAR(255) NOT NULL,
 *     password VARCHAR(255) NOT NULL,
 *     confirmPassword VARCHAR(255) NOT NULL,
 *     shouldPass BOOLEAN NOT NULL DEFAULT FALSE,
 *     expectedError VARCHAR(255) NOT NULL
 * );
 *
 * INSERT INTO registration_data (description, name, username, password, confirmPassword, shouldPass, expectedError) VALUES
 * ('valid registration',   'Dev Sharma',     'dev@test.com',      'Strong@123', 'Strong@123',    TRUE,  'Email already exists'),
 * ('password mismatch',    'Alice',          'alice@test.com',    'Strong@123', 'Different@456', FALSE, 'Passwords do not match'),
 * ('weak password',        'Bob',            'bob@test.com',      '123',        '123',           FALSE, 'Password must be at least 8 characters'),
 * ('duplicate email',      'Existing User',  'existing@test.com', 'Strong@123', 'Strong@123',    FALSE, 'Email already exists'),
 * ('invalid email format', 'Charlie',        'not-an-email',      'Strong@123', 'Strong@123',    FALSE, 'Please enter a valid email');
 * ```
 */
