const element = document.getElementsByClassName('test')[0];

console.log(element)

function changeStyle(){
    element.clssList.add('visible')
}

function hide(){
    element.clssList.toggle('test')
}

function getProperty(){
    var styles = window.getComputedStyle(element)
    console.log(styles)
    console.log(styles.getPropertyValue('color'))
    console.log(styles.getPropertyValue('font-size'))
    console.log(styles.getPropertyValue('font-style'))
}