import './css/com.less';
import Layer from './components/layer/layer.js';

const App = function (){
    const NUM = 1;
    alert(NUM);

    var dom = document.getElementById('wrap');
    var layer = new Layer();
    console.log(layer);
    dom.innerHTML = layer.tpl({
        name: 'sunny',
        arr: ['apple','orange']
    });
};

new App();
