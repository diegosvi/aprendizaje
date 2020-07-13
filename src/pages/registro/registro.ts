import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, AlertController,LoadingController } from 'ionic-angular';
import { PequesGameServiceProvider } from '../../providers/peques-game-service/peques-game-service';
import { InformacionPage } from "../informacion/informacion";
import { TabsPage } from "../tabs/tabs";
import { default as EntradaPage } from "../entrada/entrada";
import { FormBuilder, FormGroup, Validators, AbstractControl, FormControl} from '@angular/forms';
import { User } from '../../interface/interface.user';
import { AngularFireAuth } from 'angularfire2/auth';
import { isNullOrUndefined } from 'util';
//import { Router } from '@angular/router';

/**
 * Generated class for the RegistroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registro',
  templateUrl: 'registro.html',
})
export class RegistroPage implements OnInit{


  userRegisterForm: FormGroup;
  names:AbstractControl;
  lastnames:AbstractControl;
  email:AbstractControl;
  password:AbstractControl;

  //errors
  emailIncorrect=false;
  emailExists=false;
  passwordIncorrect=false;
  passportIncorrect=false;
  textPassportIncorrect=false;
  rucIncorrect=false;
  textRucIncorrect=false;

  //errors launch
  errorsForm:boolean=false;

  user:any={}
  //showPassword
  public type = 'password';
  public showPass = false;

  isIOs:boolean=false;
  //Pass validator
  regxs={
    //"upperLower":/^(?=.*[a-zA-Z0-9]{1,})(?=.*[a-zA-Z0-9]{1,})(?=.*[a-zA-Z0-9]{1,})\S{6,}$/g
    //"lower": /^[a-z0-9 ]+$/,
    "upperLower":/^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040\u002d\u005f\cI\cA\cZ\])(?=.*[A-Z])(?=.*[a-z])\S{6,}$/,
    "mail":/^[a-z0-9A-Z!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9A-Z!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9A-Z](?:[a-z0-9-A-Z]*[a-z0-9A-Z])?\.)+[a-z0-9A-Z](?:[a-z0-9-A-Z]*[a-z0-9A-Z])?$/,
    "passport":/[A-Za-z0-9]/
  }

   //show/hide pass
   inputPass="password";


  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    private pequesgameservice:PequesGameServiceProvider, 
    public formBuilder: FormBuilder,
    public afAuth:AngularFireAuth,
    public toastCtrl:ToastController,
    public alertCtrl:AlertController) {

      this.formValidation();

  }

  ngOnInit() {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistroPage');
  }

  irEntrada(){
    this.navCtrl.push(EntradaPage);
  }

  /*OnSubmitRegister(){
    this.pequesgameservice.register(this.email, this.password,this.name).then( auth => {
      this.navCtrl.push(EntradaPage)
      alert('Su registro fue exitoso')
      console.log(auth)
    }).catch( err => alert('Debe llenar todos los campos'))
  }*/

  ionViewWillEnter() {

    let tabs = document.querySelectorAll( '.show-tabbar' );
    if( tabs !== null ) {
      Object.keys( tabs ).map( ( key ) => {
        tabs[ key ].style.display = 'none';
      } );
    }}


    createNewUser(){
      //if(this.userRegisterForm.valid && !this.passwordIncorrect && !this.identificationIncorrect && !this.textIdentificationIncorrect && !this.textPhoneIncorrect && !this.phoneIncorrect){
      if(this.userRegisterForm.valid && !this.passwordIncorrect){
        let userData={
          nombre:(this.userRegisterForm.value.names).toUpperCase(),
          apellido:(this.userRegisterForm.value.lastnames).toUpperCase(),
          correo:(this.userRegisterForm.value.email).toLowerCase(),
        }
  
        this.pequesgameservice.createUser(this.userRegisterForm.value.email,this.userRegisterForm.value.password,userData)
        .then(confirm=>{
          console.log(confirm);
          if (confirm == null || confirm == undefined) {
            this.userRegisterForm.controls['email'].setErrors({'incorrect':true});
            this.navCtrl.setRoot(TabsPage);
          }else if(confirm.code==="auth/email-already-in-use"){
            this.emailExists=true;
          }
        })
        .catch(e=>{
          this.showAlertError('¡Ooops!','Algo salió mal, por favor vuelve a intentarlo.')
        })
      }else{
        this.showAlertError('¿Es en serio?','Todos los campos son obligatorios.')
        this.errorsForm=true;
      }
    }

    showAlertError(title,message) {
      const alert = this.alertCtrl.create({
        title: title,
        subTitle: message,
        buttons: ['Aceptar']
      });
      alert.present();
    }


    formValidation(){
      this.userRegisterForm=this.formBuilder.group({
        names: ['', [Validators.required]],
        lastnames: ['', [Validators.required]],
        email:['', Validators.compose([Validators.required,(control:FormControl)=>{
          if(this.email != undefined && this.email != null){
            let _email=String(this.email.value).trim();
            if(this.regxs.mail.test(_email)){
              this.emailIncorrect=false
            }else{
              if(this.regxs.mail.test(_email)){
                this.emailIncorrect=false
              }else{
                this.emailIncorrect=true
              }
            }
          }
          return null;
        }])],
        password: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
        //typeIdentificationSelect:['cedula']
      });
      //controls
      this.names = this.userRegisterForm.controls['names']
      this.lastnames = this.userRegisterForm.controls['lastnames']
      //this.identification = this.userRegisterForm.controls['identification']
      //this.phone = this.userRegisterForm.controls['phone']
      this.email = this.userRegisterForm.controls['email']
      this.password = this.userRegisterForm.controls['password']
      //this.typeIdentification=this.userRegisterForm.controls['typeIdentificationSelect']
    }


    showPassword() {
      this.showPass = !this.showPass;
   
      if(this.showPass){
        this.type = 'text';
      } else {
        this.type = 'password';
      }
    }
  
    async presentLoading(loading) {
      return await loading.present();
    }
  
    async presentAlert(title,message) {
      const alert = await this.alertCtrl.create({
       // header: title,
        message: message,
        buttons: ['OK']
      });
  
      await alert.present();
    }

    changeData(){
      this.errorsForm=false;
    }

    userOk() {
      let toast = this.toastCtrl.create({
        message: 'El registro a sido correcto.' ,
        duration: 3000,
        position:'top'
      });
      toast.present();
    } 

    errorToast(message){
      switch (message) {
        case "auth/email-already-in-use":
          message="El correo ya se encuentra registrado.";
          break;

        case "auth/invalid-email":
          message="Ingresa un correo válido.";
          break;

        case "auth/weak-password":
          message="La contraseña debe tener 6 caracteres.";
          break;

        case "auth/argument-error":
          message="Los campos no deben estar vacíos.";
          break;
      }
      let toast = this.toastCtrl.create({
        message: message,
        duration: 3000,
        position:'top'
      });
      toast.present();
    }



}
