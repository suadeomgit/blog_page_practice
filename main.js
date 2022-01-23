// const sel = function(a){return document.querySelector(a)};
const sel = (a) => document.querySelector(a);


// set aside's height by get aside's contents height
const contents = document.querySelector('aside>ul');
const height = contents.offsetHeight;
console.log(height);
const newHeight = height+150;
console.log(newHeight);
document.querySelector('aside').setAttribute('style', 'height: '+newHeight+'px');
// document.getElementsByTagName('aside')[0].setAttribute('style', 'height: '+newHeight+'px');

// set left side main division's height by get Id(r_side_contents)'s height
const cntsIdCenterMainDiv = document.querySelector('#r_side_contents');
const heightIdCenterMainDiv = cntsIdCenterMainDiv.offsetHeight;
console.log(heightIdCenterMainDiv);
const cntsIdLeftSideMainHeader = document.getElementById('profile');
const cntsIdLeftSideMainFooter = document.querySelector('#l_side_contents>footer');
const heightIdLeftSideMainHeader = cntsIdLeftSideMainHeader.offsetHeight;
const heightIdLeftSideMainFooter = cntsIdLeftSideMainFooter.offsetHeight;
document.querySelector('#l_side_main nav').setAttribute('style', 'height: '+(heightIdCenterMainDiv-(heightIdLeftSideMainHeader+heightIdLeftSideMainFooter))+'px');

// set div#r_side_contents's height 
// to min-width:1200px 
// if div#r_side_contents's height is lower than 1200px
const cntsIdCenterMainAttrMain = document.querySelector('#r_side_contents>main');
const cntsIdCenterMainAttrSection = document.querySelector('#r_side_contents>section'); 
const heightIdCenterMainAttrMain = cntsIdCenterMainAttrMain.offsetHeight;
const heightIdCenterMainAttrSection = cntsIdCenterMainAttrSection.offsetHeight;
const cntsIdCenterMainAttrAside = document.querySelector('#r_side_contents>aside');
const heightIdCenterMainAttrAside = cntsIdCenterMainAttrAside.offsetHeight;
if (heightIdCenterMainAttrMain+heightIdCenterMainAttrSection+heightIdCenterMainAttrAside<1200){
    sel('#r_side_contents').setAttribute('style', 'height:1200px');
};
console.log(heightIdCenterMainAttrMain+heightIdCenterMainAttrSection+heightIdCenterMainAttrAside);



function newTabOpen(url){
    window.open('https://'+url);
};