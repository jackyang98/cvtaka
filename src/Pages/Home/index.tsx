import {
    FullPage
} from './styles.ts'
import axios from 'axios';
import * as xlsx from 'xlsx';
import React, { useEffect } from 'react';

const HomePage = () => {

    const getData = async () => {
        const response = await axios({
            method: 'GET',
            url: `https://docs.google.com/spreadsheets/d/1oF3vMoHrwIUzWCQ_neEemfAqR279NpHXn7HaSxrXc_U/edit#gid=0`,
            responseType: 'arraybuffer',
        });

        const workbook = xlsx.read(response.data, { type: 'array' });
        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];

        console.log(sheet)

        // Process each cell in the sheet
        const cells = xlsx.utils.sheet_to_json(sheet, { header: 1, raw: true });

        // Now 'cells' is an array representing each row in the spreadsheet

        console.log('Spreadsheet Data:', cells);
    }

    useEffect(() => {
        getData()
    }, [])
    return (
        <FullPage>
            Bla

        </FullPage>
    )
}

export default HomePage;