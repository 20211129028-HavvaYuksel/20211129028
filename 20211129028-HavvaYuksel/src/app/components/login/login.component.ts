import { Sonuc } from './../../models/Sonuc';
import { MytoastService } from './../../services/mytoast.service';
import { FbservisService } from './../../services/fbservis.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Uye } from 'src/app/models/Uye';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  constructor(
    public fbservis: FbservisService,
    public toast: MytoastService
  ) { }

  ngOnInit() { 
  }
    OturumAc(mail: string, parola: string) {
      this.fbservis.OturumAc(mail, parola).subscribe(d => {
        if (d.length > 0) {
          var kayit: Uye = d[0];
          localStorage.setItem("adsoyad", kayit.adsoyad);
          localStorage.setItem("admin", kayit.admin.toString());
          location.href = "/";
        } else {
          var s: Sonuc = new Sonuc();
          s.islem = false;
          s.mesaj = "E-Posta Adresi veya Parola Geçersizdir!";
          this.toast.ToastUygula(s);
        }
      });
  }
}
