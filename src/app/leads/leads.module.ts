import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeadsGridComponent } from './leads-listing/leads-grid/leads-grid.component';
import { LeadsToolsComponent } from './leads-listing/leads-tools/leads-tools.component';
import { DownloadPdfComponent } from './leads-listing/leads-tools/download-pdf/download-pdf.component';
import { DownloadExcelComponent } from './leads-listing/leads-tools/download-excel/download-excel.component';



@NgModule({
  declarations: [LeadsGridComponent, LeadsToolsComponent, DownloadPdfComponent, DownloadExcelComponent],
  imports: [
    CommonModule
  ]
})
export class LeadsModule { }
