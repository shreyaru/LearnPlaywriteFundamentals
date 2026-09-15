/**
 * Script to generate the registration-data.xlsx test data file.
 * Run once with: npx ts-node tests/19_Data_Driven_Testing/test-data/generate-xlsx.ts
 */
import * as XLSX from 'xlsx';
import * as path from 'path';

const data = [
    {
        description: 'valid registration',
        name: 'Dev Sharma',
        username: 'dev@test.com',
        password: 'Strong@123',
        confirmPassword: 'Strong@123',
        shouldPass: true,
        expectedError: 'Email already exists',
    },
    {
        description: 'password mismatch',
        name: 'Alice',
        username: 'alice@test.com',
        password: 'Strong@123',
        confirmPassword: 'Different@456',
        shouldPass: false,
        expectedError: 'Passwords do not match',
    },
    {
        description: 'weak password',
        name: 'Bob',
        username: 'bob@test.com',
        password: '123',
        confirmPassword: '123',
        shouldPass: false,
        expectedError: 'Password must be at least 8 characters',
    },
    {
        description: 'duplicate email',
        name: 'Existing User',
        username: 'existing@test.com',
        password: 'Strong@123',
        confirmPassword: 'Strong@123',
        shouldPass: false,
        expectedError: 'Email already exists',
    },
    {
        description: 'invalid email format',
        name: 'Charlie',
        username: 'not-an-email',
        password: 'Strong@123',
        confirmPassword: 'Strong@123',
        shouldPass: false,
        expectedError: 'Please enter a valid email',
    },
];

const worksheet = XLSX.utils.json_to_sheet(data);
const workbook = XLSX.utils.book_new();
XLSX.utils.book_append_sheet(workbook, worksheet, 'RegistrationData');

const outputPath = path.join(__dirname, 'registration-data.xlsx');
XLSX.writeFile(workbook, outputPath);
console.log(`✅ Created: ${outputPath}`);
