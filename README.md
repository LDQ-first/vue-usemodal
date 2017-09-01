# vue-usemodal

> A modal plugin of Vue.js 

[Demo](http://ldqblog.me/vue-modal-plugin/dist/#/)

[more detail of use](https://github.com/LDQ-first/vue-modal-plugin/tree/master/src/views/show.vue)


## Use

``` javascript
/*-- npm --*/
npm install --save vue-usemodal
```

``` javascript
/*-- main.js --*/
import Vue from 'vue'
import VueModal from 'vue-usemodal'
Vue.use(VueModal)
```


1. First

```
<!--html-->
<modal :mdShow="modal" @close="closeModal">
    <h3 slot="title">Modal</h3>
</modal>
```

2. Second
```
<!--html-->
<modal :mdShow="modal" @close="closeModal">
    <h3 slot="title">Modal</h3>
    <p slot="message">
        {{modalMessage}}
    </p>
</modal>
```

3. Third
```
<!--html-->
<modal :mdShow="modal" @close="closeModal">
    <h3 slot="title">Modal</h3>
    <p slot="message">
        {{modalMessage}}
    </p>
    <div slot="btnGroup">
        <button class="md-close" @click="closeModal">closeModal</button>
    </div>
</modal>
```

4. Fourth
```
<!--html-->
<modal :mdShow="modalFour" @close="closeModal">
    <h3 slot="title" >Modal</h3>
    <p slot="message">
        {{modalMessage}}
    </p>
    <div slot="btnGroup" >
        <button class="md-close" @click="dosomething();closeModal">sure</button>
        <button class="md-close" @click="closeModal">cancel</button>
    </div>
</modal>

```


5. Fifth
```
<modal :mdShow="modalFive" @close="closeModal">
    <h3 slot="title">Modal</h3>
    <p slot="message">
        {{modalMessage}}
        <ul>
            <li v-for="(item, index) of message" key="index">
                <div>
                    <span>{{item.name}}</span>
                    <input type="text" v-model="item.value">
                </div>
            </li>
        </ul>
    </p>
    <div slot="btnGroup">
        <button class="md-close" @click="closeModal">sure</button>
        <button class="md-close" @click="dosomething();closeModal">cancel</button>
    </div>
</modal>
```

## Param

```
props: ['mdShow']
```


## Three solt

```
<slot name='title'></slot>

<slot name="message"></slot>

<slot name="btnGroup"></slot>

```


> You can also explore more use by yourself 


