import excel from 'exceljs'


export async function readdatafromexcel(excelpath, sheetname,rownum,celnum)
{

  let book= await new excel.Workbook()
    await book.xlsx.readFile(excelpath)
     let sheet= await book.getWorksheet(sheetname)
     let data = sheet.getRow(rownum).getCell(celnum).toString()
     return data

}