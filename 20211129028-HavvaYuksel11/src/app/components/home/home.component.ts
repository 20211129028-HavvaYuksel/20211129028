import { Component, OnInit } from '@angular/core';
import { FbservisService } from 'src/app/services/fbservis.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  image1="https://cdn1.ntv.com.tr/gorsel/MeK69pEDGkiI_ZUkQcvAjQ.jpg?width=660&mode=both&scale=both";
  image2="https://haberdenizlicom.teimg.com/crop/860x504/haberdenizli-com/uploads/2022/11/suruculere-kis-lastigi-uyarisi.jpg";
  image3="https://cdn1.ntv.com.tr/gorsel/XTXuNgaOgEapJMsBktMeOA.jpg?width=1000&mode=both&scale=both&v=1669883355636";
  image4="https://cdn1.ntv.com.tr/gorsel/JEcc15sfZkKyujg4ZMtBuQ.jpg?width=1000&mode=both&scale=both&v=1669878157150";
  image5="https://cdn1.ntv.com.tr/gorsel/j8KqfnY2oUm2dFdTqvoNDQ.jpg?width=1000&mode=both&scale=both&v=1669883355636";



  constructor(
    public servis: FbservisService
  ) {

  }

  ngOnInit(): void {

  }

}

