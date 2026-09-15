import * as path from 'path';
import * as XLSX from 'xlsx';

export interface RegistrationData {
    description: string;
    name: string;
    username: string;
    password: string;
    confirmPassword: string;
    shouldPass: boolean;
    expectedError: string;
}

export function readXLSX(filePath: string, sheetName?: string): RegistrationData[] {
    const fullPath = path.resolve(filePath);
    const workbook = XLSX.readFile(fullPath);

    // Use provided sheet name or default to the first sheet
    const sheet = sheetName
        ? workbook.Sheets[sheetName]
        : workbook.Sheets[workbook.SheetNames[0]];

    // Convert sheet to JSON — header row becomes keys
    const data = XLSX.utils.sheet_to_json<RegistrationData>(sheet);
    return data;
}
