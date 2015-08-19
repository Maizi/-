// IE6
var isIE6 = !!window.ActiveXObject && !window.XMLHttpRequest;

// isMobile
var isMobile = /AppleWebKit.*Mobile/i.test(navigator.userAgent) || (/MIDP|SymbianOS|NOKIA|SAMSUNG|LG|NEC|TCL|Alcatel|BIRD|DBTEL|Dopod|PHILIPS|HAIER|LENOVO|MOT-|Nokia|SonyEricsson|SIE-|Amoi|ZTE/.test(navigator.userAgent)));

// placeholder compatibility
function funPlaceholder (element, color) {
    var placeholder = '';
    if (element && !('placeholder' in document.createElement('input')) && (placeholder = element.getAttribute('placeholder'))) {
        element.onfocus = function() {
            if (this.value === placeholder) {
                this.value = '';
            }
            this.style.color = '';
        };
        element.onblur = function() {
            if (this.value === '') {
                this.value = placeholder;
                this.style.color = color;    
            }
        };
        
        // style init
        if (element.value === '') {
            element.value = placeholder;
            element.style.color = color;    
        }
    }
}

// funPlaceholder(document.getElementById('inputelem'), '#F43217');

// template
function tplFn (tpl) {
    var i = 1,
        argu = arguments;
    return tpl.replace(/\{%s\}/g, function() {
        return argu[i++];
    });
}

// tplFn(template, 参数1, 参数2...参数n);

// popup position（兼容ie6）
function pos (elem){
	var top = isIE6 ? $(window).scrollTop() + $(window).height() / 2 + 'px' : '50%',
    	bw = $('body').width(),
    	bh = $('body').height();

    elem.css({'marginLeft': '-' + elem.width() / 2 + 'px',
             'left': '50%',
             'marginTop': '-' + elem.height() / 2 + 'px',
             'top': top
    }).removeClass('hide');
    
    // ie
    if (isIE6) {
        $(window).scroll(function() {
            elem.css('top', $(window).scrollTop() + $(window).height() / 2+'px').removeClass('hide').show();
        })
    } 
    $('#J_layer').css({'height':bh,'width':bw})
                .removeClass('hide');
}