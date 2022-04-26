import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Formation } from 'src/shared/Formation';
import { FormationService } from 'src/shared/formation-service';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  public selectedFormation: any;

  constructor(
    private formationService : FormationService,
    private route: ActivatedRoute,
    private router: Router,
    public alertController: AlertController
  ) { }

  selectedForm?: Formation;
  onSelect(formation: Formation): void {
  this.selectedForm = formation;
  this.alertController.create({
      header: 'Alert',
      subHeader: 'Confirmation',
      message: 'Enroll this course ?',
      buttons: [
        
        {
          text: 'Cancel',
          handler: () => {

          }
        },
        {
          text: 'Yes !',
          handler: (value) => {
            let data = {
              name: this.selectedForm.name,
              price: this.selectedForm.price
            }
            this.formationService.saveFormation(data)
            .then(
              res =>{
                this.router.navigate(['/summary',formation]);
              }
            )
          }
        }
      ]
    
  }).then(res => {
      res.present();
     });
  }
  
  ngOnInit() {
    this.selectedFormation = this.route.snapshot.params
  }

}
