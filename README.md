# Angular 2 + Ionic CLI Hack

본 프로젝트 Angular 2 Framework 와 Ionic CLI 의 조합으로 다음과 같은 사유에 의해서 작성되었습니다.

* 앱 개발을 한번 해서 어디서든 사용 가능하게 하려고 합니다.

* 하지만, Ionic 2 Framework 는 IE 를 공식 지원을 하지 않으며 실제로 테스트 해 본 결과 잘 동작하지 않습니다.

* 대한민국의 많은 사람들이 IE9 를 사용하므로 IE 지원이 필요합니다.

* Angular 2 Framework 는 IE9 부터 지원합니다.

* Ionic CLI 는 괜찮은 툴입니다.

* 그리고 Ionic 2 Framework 를 버리고, Angular 2 와 Ionic CLI 를 선택한 것입니다.


## TODO For Aonic

* 기본적인 deploy 코드
* 기본적인 lazy loading
* 기본적인 firebase 연동.


* @done 기본적인 라우팅 코드

## TODO Much laster

* lazy loading.




## TODO : BUGS

* ng-boostrap modal was removed although it does not look like an error of bootstrap modal ( it looks like an error of @ionic/app-scripts. there is an issue. ), it is an disturbance to code.
    * wait until the issue disappears.
* sharing place holder of formProcess does not work on IE.


````
    <i class="fa fa-gear fa-stack-1x fa-inverse" [class.fa-spin]="process.loader"></i>
````

* [class.fa-spin]="process.loader" is not working when it is changed in other component.



# Installation

* npm install
* ionic serve



## Packages installed by 'npm install'

You do not need to install these module one by one. these are installed by 'npm install'.

* npm i ng2-file-upload --save
* npm i lodash --save




# Update history

2016-12-22 - Remove address and port on "ionic serve" in package.json.
2016-12-21 - for public use.
2016-12-02 - for withcenter internal use.



# 팁

## Angular Router





가능하면 웹과 앱의 base href 를 따로 기록을 한다.

즉, 앱으로 제작 할 때에는 <base href="/android_asset/www/"> 와 같이 해서, 컴파일을 한 다음 deploy 를 한다.



## <base href=''>

The base href with empty string and the follow javascript code in index.html is fine only if you don't do ionic deploy.
If you do Ionic deploy, consider this thing.
````
  <base id="baseHref" href="./">
  <script src="cordova.js"></script><!-- cordova.js required for cordova apps. For web, it should be null script. -->

  <script type="text/javascript">
    if ( window.cordova ) {
      if ( typeof IonicDevServer != 'undefined' ) path = '/'; // live reload. source comes from desktop computer.
      else path = './'; // For production mode of mobile app, no live reload. so, <base href='./'> for app update.
    }
    else path = '/'; // For web, change <base href=''> to <base href='/'> for reloading. 
    var theBase = document.getElementById("baseHref");
    theBase.href = path;
  </script>
````
Since, Ionic Deploy changes the base app folder, <base href=''> should be relative.

And it often causes problem only 'go back' button.

so, do the following to avoid crash on 'go back' button.

````
  backButton() {
    document.addEventListener("backbutton", () => {
      let url = parse_url( location.href );
      if ( url['path'] == '/' || url['path'] == '/android_asset/www/') {
        navigator.app.exitApp();
      }
      else {
        navigator.app.backHistory();
      }
    }, false );
  }
````


# Live reloading

Live reloading in Aonic is different from Ionic2 since the web/app is just plain Angular 2.

To do live reloading with 'routing', the followings should match.

1. correct settings of '<base href="">'
2. 'proxy' in ionic.config.json
3. IP:PORT of ionic webpack dev webserver 
4. IP:PORT of device( browser )

By defualt, you can do the following to do live reloading with routing.;

````
ionic serve --address localhost --port 8000
````
