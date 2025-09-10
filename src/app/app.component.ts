import { Component } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { TestService } from './test.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'New Project';
  pc: string;
  pcnmb: number;
  clients: any[] = [];
  contacts: any[] = [];
  filteredContacts: any[] = [];
  client: any;
  projectName: string;
  location: string;
  clientSelected: string = '5f3a99203233c328b';
  contactSelected: string;
  dutSelected: string = 'Cable AT';
  description: string = '';
  ATVoltajeSelected: number = 69;
  ICOFF: boolean = false;
  TAOFF: boolean = false;
  DPOFF: boolean = false;
  DPON: boolean = false;
  LF: boolean = false;
  MICOFF: boolean = false;
  MTAOFF: boolean = false;
  MDPOFF: boolean = false;
  MDPON: boolean = false;
  ICOFFM: boolean = false;
  TAOFFM: boolean = false;
  DPOFFM: boolean = false;
  DPONM: boolean = false;
  LFM: boolean = false;
  MICOFFM: boolean = false;
  MTAOFFM: boolean = false;
  MDPOFFM: boolean = false;
  MDPONM: boolean = false;
  GISTA: boolean = false;
  GISDP: boolean = false;
  AMSF6OFF: boolean = false;
  MMSF6OFF: boolean = false;
  AASF6OFF: boolean = false;
  MASF6OFF: boolean = false;
  ADSF6OFF: boolean = false;
  ADSF6ON: boolean = false;
  MDSF6OFF: boolean = false;
  MDSF6ON: boolean = false;
  AFSF6OFF: boolean = false;
  MFSF6OFF: boolean = false;
  INTAMSF6OFF: boolean = false;
  INTMMSF6OFF: boolean = false;
  INTAASF6OFF: boolean = false;
  INTMASF6OFF: boolean = false;
  INTADSF6OFF: boolean = false;
  INTMDSF6OFF: boolean = false;
  INTAFSF6OFF: boolean = false;
  INTMFSF6OFF: boolean = false;
  TRFAPAOFF: boolean = false;
  TRFMPAOFF: boolean = false;
  TRFMPAON: boolean = false;
  TRFMRAOFF: boolean = false;
  TRFMRAON: boolean = false;
  EQPMTCAL: boolean = false;
  EQPATCAL: boolean = false;
  EQPMTRTA: boolean = false;
  EQPATRTA: boolean = false;
  EQPMTMTO: boolean = false;
  EQPATMTO: boolean = false;
  EQPMTVTA: boolean = false;
  EQPATVTA: boolean = false;
  EQPMTCAP: boolean = false;
  EQPATCAP: boolean = false;
  data: any;

  constructor(
    protected testService: TestService,
    private spinner: NgxSpinnerService
  ) {}

  showSpinner() {
    this.spinner.show();
  }

  hideSpinner() {
    this.spinner.hide();
  }
  setPC(pc) {
    //pc = pc + 1;
    return 'PC' + pc;
  }
  /*
  setPC(pc) {
    const str = '' + pc;
    const pad = '0000';
    const ans = pad.substring(0, pad.length - str.length) + str;
    return 'PC' + ans;
  }*/

  contactFilter() {
    this.contactSelected = undefined;
    this.filteredContacts = this.contacts.filter((contact) => {
      return contact.account_id == this.clientSelected;
    });
    this.contactSelected = this.filteredContacts[0].id;
  }

  onSubmit() {
    this.showSpinner();
    this.data = {
      pc: this.pc,
      name: this.projectName,
      location: this.location,
      description: this.description,
      account_id: this.clientSelected,
      contact_id: this.contactSelected,
      DUT: this.dutSelected,
      ATVoltajeSelected: this.ATVoltajeSelected,
      ICOFF: this.ICOFF ? 'CBL-AT-A-IC-OFF\n' : '',
      TAOFF: this.TAOFF ? 'CBL-AT-A-TA-OFF\n' : '',
      DPOFF: this.DPOFF ? 'CBL-AT-A-DP-OFF\n' : '',
      DPON: this.DPON ? 'CBL-AT-A-DP-ON\n' : '',
      LF: this.LF ? 'CBL-AT-A-LF-OFF\n' : '',
      MICOFF: this.MICOFF ? 'CBL-AT-M-IC-OFF\n' : '',
      MTAOFF: this.MTAOFF ? 'CBL-AT-M-TA-OFF\n' : '',
      MDPOFF: this.MDPOFF ? 'CBL-AT-M-DP-OFF\n' : '',
      MDPON: this.MDPON ? 'CBL-AT-M-DP-ON\n' : '',
      ICOFFM: this.ICOFFM ? 'CBL-MT-A-IC-OFF\n' : '',
      TAOFFM: this.TAOFFM ? 'CBL-MT-A-TA-OFF\n' : '',
      DPOFFM: this.DPOFFM ? 'CBL-MT-A-DP-OFF\n' : '',
      DPONM: this.DPONM ? 'CBL-MT-A-DP-ON\n' : '',
      LFM: this.LFM ? 'CBL-MT-A-LF-OFF\n' : '',
      MICOFFM: this.MICOFFM ? 'CBL-MT-M-IC-OFF\n' : '',
      MTAOFFM: this.MTAOFFM ? 'CBL-MT-M-TA-OFF\n' : '',
      MDPOFFM: this.MDPOFFM ? 'CBL-MT-M-DP-OFF\n' : '',
      MDPONM: this.MDPONM ? 'CBL-MT-M-DP-ON\n' : '',
      GISTA: this.GISTA ? 'GIS-AT-A-TA-OFF\n' : '',
      GISDP: this.GISDP ? 'GIS-AT-A-DP-OFF\n' : '',
      AMSF6OFF: this.AMSF6OFF ? 'GIS-AT-A-MSF6-OFF\n' : '',
      MMSF6OFF: this.MMSF6OFF ? 'GIS-AT-M-MSF6-OFF\n' : '',
      AASF6OFF: this.AASF6OFF ? 'GIS-AT-A-ASF6-OFF\n' : '',
      MASF6OFF: this.MASF6OFF ? 'GIS-AT-M-ASF6-OFF\n' : '',
      ADSF6OFF: this.ADSF6OFF ? 'GIS-AT-A-DSF6-OFF\n' : '',
      ADSF6ON: this.ADSF6ON ? 'GIS-AT-A-DSF6-ON\n' : '',
      MDSF6OFF: this.MDSF6OFF ? 'GIS-AT-M-DSF6-OFF\n' : '',
      MDSF6ON: this.MDSF6ON ? 'GIS-AT-M-DSF6-ON\n' : '',
      AFSF6OFF: this.AFSF6OFF ? 'GIS-AT-A-FSF6-OFF\n' : '',
      MFSF6OFF: this.MFSF6OFF ? 'GIS-AT-M-FSF6-OFF\n' : '',
      INTAMSF6OFF: this.INTAMSF6OFF ? 'INT-AT-A-MSF6-OFF\n' : '',
      INTMMSF6OFF: this.INTMMSF6OFF ? 'INT-AT-M-MSF6-OFF\n' : '',
      INTAASF6OFF: this.INTAASF6OFF ? 'INT-AT-A-ASF6-OFF\n' : '',
      INTMASF6OFF: this.INTMASF6OFF ? 'INT-AT-M-ASF6-OFF\n' : '',
      INTADSF6OFF: this.INTADSF6OFF ? 'INT-AT-A-DSF6-OFF\n' : '',
      INTMDSF6OFF: this.INTMDSF6OFF ? 'INT-AT-M-DSF6-OFF\n' : '',
      INTAFSF6OFF: this.INTAFSF6OFF ? 'INT-AT-A-FSF6-OFF\n' : '',
      INTMFSF6OFF: this.INTMFSF6OFF ? 'INT-AT-M-FSF6-OFF\n' : '',
      TRFAPAOFF: this.TRFAPAOFF ? 'TRF-AT-A-PA-OFF\n' : '',
      TRFMPAOFF: this.TRFMPAOFF ? 'TRF-AT-M-PA-OFF\n' : '',
      TRFMPAON: this.TRFMPAON ? 'TRF-AT-M-PA-ON\n' : '',
      TRFMRAOFF: this.TRFMRAOFF ? 'TRF-AT-M-RA-OFF\n' : '',
      TRFMRAON: this.TRFMRAON ? 'TRF-AT-M-RA-ON\n' : '',
      EQPMTRTA: this.EQPMTRTA ? 'EQP-MT-S-RTA-OFF\n' : '',
      EQPATRTA: this.EQPATRTA ? 'EQP-AT-S-RTA-OFF\n' : '',
      EQPMTMTO: this.EQPMTMTO ? 'EQP-MT-S-MTO-OFF\n' : '',
      EQPATMTO: this.EQPATMTO ? 'EQP-AT-S-MTO-OFF\n' : '',
      EQPMTVTA: this.EQPMTVTA ? 'EQP-MT-S-VTA-OFF\n' : '',
      EQPATVTA: this.EQPATVTA ? 'EQP-AT-S-VTA-OFF\n' : '',
      EQPMTCAP: this.EQPMTCAP ? 'EQP-MT-S-CAP-OFF\n' : '',
      EQPATCAP: this.EQPATCAP ? 'EQP-AT-S-CAP-OFF\n' : '',
      EQPMTCAL: this.EQPMTCAL ? 'EQP-MT-S-CAL-OFF\n' : '',
      EQPATCAL: this.EQPATCAL ? 'EQP-AT-S-CAL-OFF\n' : '',
    };
    this.testService.postProyecto(this.data).subscribe(
      (data) => {
        console.log(data);
        location.reload();
      },
      (error) => {
        console.error(error);
      }
    );
  }

  ngOnInit() {
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 1500);
    this.testService.getData().subscribe(
      (data) => {
        // Success
        this.clients = data['accounts'];
        //console.log(this.clients);
        this.contacts = data['contacts'];

        this.contactFilter();
      },
      (error) => {
        console.error(error);
      }
    ),
      this.testService.getPh().subscribe((dataph) => {
        this.pcnmb = dataph['pc'];
        this.pc = this.setPC(dataph['pc']);
      });
  }
}
