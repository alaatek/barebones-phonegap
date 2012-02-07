Ext.data.JsonP.Ext_Anim({"component":false,"inheritdoc":null,"aliases":{},"mixedInto":[],"extends":"Object","alternateClassNames":[],"uses":[],"allMixins":[],"singleton":true,"statics":{"css_var":[],"css_mixin":[],"cfg":[],"method":[],"event":[],"property":[]},"tagname":"class","code_type":"assignment","members":{"css_var":[],"css_mixin":[],"cfg":[{"owner":"Ext.Anim","tagname":"cfg","name":"autoClear","id":"cfg-autoClear","meta":{}},{"owner":"Ext.Anim","tagname":"cfg","name":"before","id":"cfg-before","meta":{}},{"owner":"Ext.Anim","tagname":"cfg","name":"delay","id":"cfg-delay","meta":{}},{"owner":"Ext.Anim","tagname":"cfg","name":"direction","id":"cfg-direction","meta":{}},{"owner":"Ext.Anim","tagname":"cfg","name":"disableAnimations","id":"cfg-disableAnimations","meta":{}},{"owner":"Ext.Anim","tagname":"cfg","name":"duration","id":"cfg-duration","meta":{}},{"owner":"Ext.Anim","tagname":"cfg","name":"easing","id":"cfg-easing","meta":{}},{"owner":"Ext.Anim","tagname":"cfg","name":"from","id":"cfg-from","meta":{}},{"owner":"Ext.Anim","tagname":"cfg","name":"out","id":"cfg-out","meta":{}},{"owner":"Ext.Anim","tagname":"cfg","name":"reverse","id":"cfg-reverse","meta":{}},{"owner":"Ext.Anim","tagname":"cfg","name":"scope","id":"cfg-scope","meta":{}},{"owner":"Ext.Anim","tagname":"cfg","name":"to","id":"cfg-to","meta":{}}],"method":[{"owner":"Object","tagname":"method","name":"constructor","id":"method-constructor","meta":{}},{"owner":"Object","tagname":"method","name":"hasOwnProperty","id":"method-hasOwnProperty","meta":{}},{"owner":"Object","tagname":"method","name":"isPrototypeOf","id":"method-isPrototypeOf","meta":{}},{"owner":"Object","tagname":"method","name":"propertyIsEnumerable","id":"method-propertyIsEnumerable","meta":{}},{"owner":"Ext.Anim","tagname":"method","name":"run","id":"method-run","meta":{}},{"owner":"Object","tagname":"method","name":"toLocaleString","id":"method-toLocaleString","meta":{}},{"owner":"Object","tagname":"method","name":"toString","id":"method-toString","meta":{}},{"owner":"Object","tagname":"method","name":"valueOf","id":"method-valueOf","meta":{}}],"event":[],"property":[{"owner":"Object","tagname":"property","name":"constructor","id":"property-constructor","meta":{}},{"owner":"Object","tagname":"property","name":"prototype","id":"property-prototype","meta":{}}]},"superclasses":["Object"],"html_meta":{},"private":false,"name":"Ext.Anim","mixins":[],"inheritable":false,"subclasses":[],"id":"class-Ext.Anim","html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/Anim.html#Ext-Anim' target='_blank'>Anim.js</a></div></pre><div class='doc-contents'><p><a href=\"#!/api/Ext.Anim\" rel=\"Ext.Anim\" class=\"docClass\">Ext.Anim</a> is used to excute simple animations defined in <a href=\"#!/api/Ext.anims\" rel=\"Ext.anims\" class=\"docClass\">Ext.anims</a>. The <a href=\"#!/api/Ext.Anim-method-run\" rel=\"Ext.Anim-method-run\" class=\"docClass\">run</a> method can take any of the\nproperties defined below.</p>\n\n<pre><code><a href=\"#!/api/Ext.Anim-method-run\" rel=\"Ext.Anim-method-run\" class=\"docClass\">Ext.Anim.run</a>(this, 'fade', {\n    out: false,\n    autoClear: true\n});\n</code></pre>\n\n<p>When using <a href=\"#!/api/Ext.Anim-method-run\" rel=\"Ext.Anim-method-run\" class=\"docClass\">run</a>, ensure you require <a href=\"#!/api/Ext.Anim\" rel=\"Ext.Anim\" class=\"docClass\">Ext.Anim</a> in your application. Either do this using <a href=\"#!/api/Ext-method-require\" rel=\"Ext-method-require\" class=\"docClass\">Ext.require</a>:</p>\n\n<pre><code>Ext.requires('<a href=\"#!/api/Ext.Anim\" rel=\"Ext.Anim\" class=\"docClass\">Ext.Anim</a>');\n</code></pre>\n\n<p>when using <a href=\"#!/api/Ext-method-setup\" rel=\"Ext-method-setup\" class=\"docClass\">Ext.setup</a>:</p>\n\n<pre><code><a href=\"#!/api/Ext-method-setup\" rel=\"Ext-method-setup\" class=\"docClass\">Ext.setup</a>({\n    requires: ['<a href=\"#!/api/Ext.Anim\" rel=\"Ext.Anim\" class=\"docClass\">Ext.Anim</a>'],\n    onReady: function() {\n        //do something\n    }\n});\n</code></pre>\n\n<p>or when using <a href=\"#!/api/Ext-method-application\" rel=\"Ext-method-application\" class=\"docClass\">Ext.application</a>:</p>\n\n<pre><code><a href=\"#!/api/Ext-method-application\" rel=\"Ext-method-application\" class=\"docClass\">Ext.application</a>({\n    requires: ['<a href=\"#!/api/Ext.Anim\" rel=\"Ext.Anim\" class=\"docClass\">Ext.Anim</a>'],\n    launch: function() {\n        //do something\n    }\n});\n</code></pre>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-autoClear' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Anim'>Ext.Anim</span><br/><a href='source/Anim.html#Ext-Anim-cfg-autoClear' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Anim-cfg-autoClear' class='name expandable'>autoClear</a><span> : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a></span></div><div class='description'><div class='short'>True to remove all custom CSS defined in the to config when the animation is over. ...</div><div class='long'><p>True to remove all custom CSS defined in the <a href=\"#!/api/Ext.Anim-cfg-to\" rel=\"Ext.Anim-cfg-to\" class=\"docClass\">to</a> config when the animation is over.</p>\n<p>Defaults to: <code>true</code></p></div></div></div><div id='cfg-before' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Anim'>Ext.Anim</span><br/><a href='source/Anim.html#Ext-Anim-cfg-before' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Anim-cfg-before' class='name not-expandable'>before</a><span> : <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a></span></div><div class='description'><div class='short'><p>Code to execute before starting the animation.</p>\n</div><div class='long'><p>Code to execute before starting the animation.</p>\n</div></div></div><div id='cfg-delay' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Anim'>Ext.Anim</span><br/><a href='source/Anim.html#Ext-Anim-cfg-delay' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Anim-cfg-delay' class='name expandable'>delay</a><span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a></span></div><div class='description'><div class='short'>Time to delay before starting the animation. ...</div><div class='long'><p>Time to delay before starting the animation.</p>\n<p>Defaults to: <code>0</code></p></div></div></div><div id='cfg-direction' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Anim'>Ext.Anim</span><br/><a href='source/Anim.html#Ext-Anim-cfg-direction' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Anim-cfg-direction' class='name expandable'>direction</a><span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span></div><div class='description'><div class='short'>Valid values are 'left', 'right', 'up', 'down' and null. ...</div><div class='long'><p>Valid values are 'left', 'right', 'up', 'down' and null.</p>\n<p>Defaults to: <code>null</code></p></div></div></div><div id='cfg-disableAnimations' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Anim'>Ext.Anim</span><br/><a href='source/Anim.html#Ext-Anim-cfg-disableAnimations' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Anim-cfg-disableAnimations' class='name expandable'>disableAnimations</a><span> : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a></span></div><div class='description'><div class='short'>True to disable animations. ...</div><div class='long'><p>True to disable animations.</p>\n<p>Defaults to: <code>false</code></p></div></div></div><div id='cfg-duration' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Anim'>Ext.Anim</span><br/><a href='source/Anim.html#Ext-Anim-cfg-duration' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Anim-cfg-duration' class='name expandable'>duration</a><span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a></span></div><div class='description'><div class='short'>Time in milliseconds for the animation to last. ...</div><div class='long'><p>Time in milliseconds for the animation to last.</p>\n<p>Defaults to: <code>250</code></p></div></div></div><div id='cfg-easing' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Anim'>Ext.Anim</span><br/><a href='source/Anim.html#Ext-Anim-cfg-easing' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Anim-cfg-easing' class='name expandable'>easing</a><span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span></div><div class='description'><div class='short'>Valid values are 'ease', 'linear', ease-in', 'ease-out', 'ease-in-out' or a cubic-bezier curve as defined by CSS. ...</div><div class='long'><p>Valid values are 'ease', 'linear', ease-in', 'ease-out', 'ease-in-out' or a cubic-bezier curve as defined by CSS.</p>\n<p>Defaults to: <code>&quot;ease-in-out&quot;</code></p></div></div></div><div id='cfg-from' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Anim'>Ext.Anim</span><br/><a href='source/Anim.html#Ext-Anim-cfg-from' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Anim-cfg-from' class='name expandable'>from</a><span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></span></div><div class='description'><div class='short'>An object of CSS values which the animation begins with. ...</div><div class='long'><p>An object of CSS values which the animation begins with. If you define a CSS property here, you must also\ndefine it in the <a href=\"#!/api/Ext.Anim-cfg-to\" rel=\"Ext.Anim-cfg-to\" class=\"docClass\">to</a> config.</p>\n<p>Defaults to: <code>{}</code></p></div></div></div><div id='cfg-out' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Anim'>Ext.Anim</span><br/><a href='source/Anim.html#Ext-Anim-cfg-out' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Anim-cfg-out' class='name expandable'>out</a><span> : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a></span></div><div class='description'><div class='short'>True if you want the animation to slide out of the screen. ...</div><div class='long'><p>True if you want the animation to slide out of the screen.</p>\n<p>Defaults to: <code>true</code></p></div></div></div><div id='cfg-reverse' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Anim'>Ext.Anim</span><br/><a href='source/Anim.html#Ext-Anim-cfg-reverse' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Anim-cfg-reverse' class='name expandable'>reverse</a><span> : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a></span></div><div class='description'><div class='short'>True to reverse the animation direction. ...</div><div class='long'><p>True to reverse the animation direction. For example, if the animation direction was set to 'left', it would\nthen use 'right'.</p>\n<p>Defaults to: <code>false</code></p></div></div></div><div id='cfg-scope' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Anim'>Ext.Anim</span><br/><a href='source/Anim.html#Ext-Anim-cfg-scope' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Anim-cfg-scope' class='name not-expandable'>scope</a><span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></span></div><div class='description'><div class='short'><p>Scope to run the <a href=\"#!/api/Ext.Anim-cfg-before\" rel=\"Ext.Anim-cfg-before\" class=\"docClass\">before</a> function in.</p>\n</div><div class='long'><p>Scope to run the <a href=\"#!/api/Ext.Anim-cfg-before\" rel=\"Ext.Anim-cfg-before\" class=\"docClass\">before</a> function in.</p>\n</div></div></div><div id='cfg-to' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Anim'>Ext.Anim</span><br/><a href='source/Anim.html#Ext-Anim-cfg-to' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Anim-cfg-to' class='name expandable'>to</a><span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></span></div><div class='description'><div class='short'>An object of CSS values which the animation ends with. ...</div><div class='long'><p>An object of CSS values which the animation ends with. If you define a CSS property here, you must also\ndefine it in the <a href=\"#!/api/Ext.Anim-cfg-from\" rel=\"Ext.Anim-cfg-from\" class=\"docClass\">from</a> config.</p>\n<p>Defaults to: <code>{}</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-constructor' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Object' rel='Object' class='defined-in docClass'>Object</a><br/><a href='source/Object.html#Object-property-constructor' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Object-property-constructor' class='name expandable'>constructor</a><span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></span></div><div class='description'><div class='short'>Specifies the function that creates an object's prototype. ...</div><div class='long'><p>Specifies the function that creates an object's prototype.</p>\n\n<p>Returns a reference to the Object function that created the instance's prototype. Note that the\nvalue of this property is a reference to the function itself, not a string containing the\nfunction's name, but it isn't read only (except for primitive Boolean, Number or String values: 1,\ntrue, \"read-only\").</p>\n\n<p>All objects inherit a <code>constructor</code> property from their <code>prototype</code>:</p>\n\n<pre><code>o = new Object // or o = {} in JavaScript 1.2\no.constructor == Object\na = new Array // or a = [] in JavaScript 1.2\na.constructor == Array\nn = new Number(3)\nn.constructor == Number\n</code></pre>\n\n<p>Even though you cannot construct most HTML objects, you can do comparisons. For example,</p>\n\n<pre><code>document.constructor == Document\ndocument.form3.constructor == Form\n</code></pre>\n\n<p>The following example creates a prototype, <code>Tree</code>, and an object of that type, theTree. The example then displays the <code>constructor</code> property for the object <code>theTree</code>.</p>\n\n<pre><code>function Tree(name) {\n    this.name = name;\n}\ntheTree = new Tree(\"Redwood\");\nconsole.log(\"theTree.constructor is \" + theTree.constructor);\n</code></pre>\n\n<p>This example displays the following output:</p>\n\n<pre><code>theTree.constructor is function Tree(name) {\n    this.name = name;\n}\n</code></pre>\n\n<p>The following example shows how to modify constructor value of generic objects. Only true, 1 and\n\"test\" variable constructors will not be changed. This example explains that is not always so safe\nto believe in constructor function.</p>\n\n<pre><code>function Type(){};\nvar types = [\n    new Array,  [],\nnew Boolean,    true,\nnew Date,\nnew Error,\nnew Function,   function(){},\nMath,\nnew Number, 1,\nnew Object, {},\nnew RegExp, /(?:)/,\nnew String, \"test\"\n];\nfor(var i = 0; i &lt; types.length; i++){\n    types[i].constructor = Type;\n    types[i] = [types[i].constructor, types[i] instanceof Type, types[i].toString()];\n};\nalert(types.join(\"\\n\"));\n</code></pre>\n</div></div></div><div id='property-prototype' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Object' rel='Object' class='defined-in docClass'>Object</a><br/><a href='source/Object.html#Object-property-prototype' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Object-property-prototype' class='name not-expandable'>prototype</a><span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></span></div><div class='description'><div class='short'><p>Allows the addition of properties to all objects of type Object.</p>\n</div><div class='long'><p>Allows the addition of properties to all objects of type Object.</p>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Object' rel='Object' class='defined-in docClass'>Object</a><br/><a href='source/Object.html#Object-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/Object-method-constructor' class='name expandable'>Ext.Anim</a>( <span class='pre'>[<a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a> value]</span> ) : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></div><div class='description'><div class='short'>Creates new Object. ...</div><div class='long'><p>Creates new Object.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>value</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a> (optional)<div class='sub-desc'><p>The value to wrap.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-hasOwnProperty' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Object' rel='Object' class='defined-in docClass'>Object</a><br/><a href='source/Object.html#Object-method-hasOwnProperty' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Object-method-hasOwnProperty' class='name expandable'>hasOwnProperty</a>( <span class='pre'><a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a> prop</span> ) : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a></div><div class='description'><div class='short'>Returns a boolean indicating whether an object contains the specified property as a direct property\nof that object an...</div><div class='long'><p>Returns a boolean indicating whether an object contains the specified property as a direct property\nof that object and not inherited through the prototype chain.</p>\n\n<p>Every object descended from <code>Object</code> inherits the <code>hasOwnProperty</code> method. This method can be used\nto determine whether an object has the specified property as a direct property of that object;\nunlike the <code>in</code> operator, this method does not check down the object's prototype chain.</p>\n\n<p>The following example determines whether the o object contains a property named prop:</p>\n\n<pre><code>o = new Object();\no.prop = 'exists';\n\nfunction changeO() {\n    o.newprop = o.prop;\n    delete o.prop;\n}\n\no.hasOwnProperty('prop');   //returns true\nchangeO();\no.hasOwnProperty('prop');   //returns false\n</code></pre>\n\n<p>The following example differentiates between direct properties and properties inherited through the\nprototype chain:</p>\n\n<pre><code>o = new Object();\no.prop = 'exists';\no.hasOwnProperty('prop');             // returns true\no.hasOwnProperty('toString');         // returns false\no.hasOwnProperty('hasOwnProperty');   // returns false\n</code></pre>\n\n<p>The following example shows how to iterate over the properties of an object without executing on\ninherit properties.</p>\n\n<pre><code>var buz = {\n    fog: 'stack'\n};\n\nfor (var name in buz) {\n    if (buz.hasOwnProperty(name)) {\n        alert(\"this is fog (\" + name + \") for sure. Value: \" + buz[name]);\n    }\n    else {\n        alert(name); // toString or something else\n    }\n}\n</code></pre>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>prop</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>The name of the property to test.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a></span><div class='sub-desc'><p>Returns true if object contains specified property; else\nreturns false.</p>\n</div></li></ul></div></div></div><div id='method-isPrototypeOf' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Object' rel='Object' class='defined-in docClass'>Object</a><br/><a href='source/Object.html#Object-method-isPrototypeOf' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Object-method-isPrototypeOf' class='name expandable'>isPrototypeOf</a>( <span class='pre'><a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a> prototype, <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a> object</span> ) : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a></div><div class='description'><div class='short'>Returns a boolean indication whether the specified object is in the prototype chain of the object\nthis method is call...</div><div class='long'><p>Returns a boolean indication whether the specified object is in the prototype chain of the object\nthis method is called upon.</p>\n\n<p><code>isPrototypeOf</code> allows you to check whether or not an object exists within another object's\nprototype chain.</p>\n\n<p>For example, consider the following prototype chain:</p>\n\n<pre><code>function Fee() {\n    // . . .\n}\n\nfunction Fi() {\n    // . . .\n}\nFi.prototype = new Fee();\n\nfunction Fo() {\n    // . . .\n}\nFo.prototype = new Fi();\n\nfunction Fum() {\n    // . . .\n}\nFum.prototype = new Fo();\n</code></pre>\n\n<p>Later on down the road, if you instantiate <code>Fum</code> and need to check if <code>Fi</code>'s prototype exists\nwithin the <code>Fum</code> prototype chain, you could do this:</p>\n\n<pre><code>var fum = new Fum();\n. . .\n\nif (Fi.prototype.isPrototypeOf(fum)) {\n// do something safe\n}\n</code></pre>\n\n<p>This, along with the <code>instanceof</code> operator particularly comes in handy if you have code that can\nonly function when dealing with objects descended from a specific prototype chain, e.g., to\nguarantee that certain methods or properties will be present on that object.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>prototype</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>an object to be tested against each link in the prototype chain of the\n<em>object</em> argument</p>\n</div></li><li><span class='pre'>object</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>the object whose prototype chain will be searched</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a></span><div class='sub-desc'><p>Returns true if object is a prototype and false if not.</p>\n</div></li></ul></div></div></div><div id='method-propertyIsEnumerable' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Object' rel='Object' class='defined-in docClass'>Object</a><br/><a href='source/Object.html#Object-method-propertyIsEnumerable' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Object-method-propertyIsEnumerable' class='name expandable'>propertyIsEnumerable</a>( <span class='pre'><a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a> prop</span> ) : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a></div><div class='description'><div class='short'>Returns a boolean indicating if the internal ECMAScript DontEnum attribute is set. ...</div><div class='long'><p>Returns a boolean indicating if the internal ECMAScript DontEnum attribute is set.</p>\n\n<p>Every object has a <code>propertyIsEnumerable</code> method. This method can determine whether the specified\nproperty in an object can be enumerated by a <code>for...in</code> loop, with the exception of properties\ninherited through the prototype chain. If the object does not have the specified property, this\nmethod returns false.</p>\n\n<p>The following example shows the use of <code>propertyIsEnumerable</code> on objects and arrays:</p>\n\n<pre><code>var o = {};\nvar a = [];\no.prop = 'is enumerable';\na[0] = 'is enumerable';\n\no.propertyIsEnumerable('prop');   // returns true\na.propertyIsEnumerable(0);        // returns true\n</code></pre>\n\n<p>The following example demonstrates the enumerability of user-defined versus built-in properties:</p>\n\n<pre><code>var a = ['is enumerable'];\n\na.propertyIsEnumerable(0);          // returns true\na.propertyIsEnumerable('length');   // returns false\n\nMath.propertyIsEnumerable('random');   // returns false\nthis.propertyIsEnumerable('Math');     // returns false\n</code></pre>\n\n<p>Direct versus inherited properties</p>\n\n<pre><code>var a = [];\na.propertyIsEnumerable('constructor');         // returns false\n\nfunction firstConstructor()\n{\n    this.property = 'is not enumerable';\n}\nfirstConstructor.prototype.firstMethod = function () {};\n\nfunction secondConstructor()\n{\n    this.method = function method() { return 'is enumerable'; };\n}\n\nsecondConstructor.prototype = new firstConstructor;\nsecondConstructor.prototype.constructor = secondConstructor;\n\nvar o = new secondConstructor();\no.arbitraryProperty = 'is enumerable';\n\no.propertyIsEnumerable('arbitraryProperty');   // returns true\no.propertyIsEnumerable('method');              // returns true\no.propertyIsEnumerable('property');            // returns false\n\no.property = 'is enumerable';\n\no.propertyIsEnumerable('property');            // returns true\n\n// These return false as they are on the prototype which\n// propertyIsEnumerable does not consider (even though the last two\n// are iteratable with for-in)\no.propertyIsEnumerable('prototype'); // returns false (as of JS 1.8.1/FF3.6)\no.propertyIsEnumerable('constructor'); // returns false\no.propertyIsEnumerable('firstMethod'); // returns false\n</code></pre>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>prop</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>The name of the property to test.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a></span><div class='sub-desc'><p>If the object does not have the specified property, this\nmethod returns false.</p>\n</div></li></ul></div></div></div><div id='method-run' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Anim'>Ext.Anim</span><br/><a href='source/Anim.html#Ext-Anim-method-run' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Anim-method-run' class='name expandable'>run</a>( <span class='pre'><a href=\"#!/api/Ext.dom.Element\" rel=\"Ext.dom.Element\" class=\"docClass\">Ext.Element</a>/HTMLElement el, <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a> anim, <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a> config</span> )</div><div class='description'><div class='short'>Used to run an animation on a specific element. ...</div><div class='long'><p>Used to run an animation on a specific element. Use the config argument to customize the animation</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>el</span> : <a href=\"#!/api/Ext.dom.Element\" rel=\"Ext.dom.Element\" class=\"docClass\">Ext.Element</a>/HTMLElement<div class='sub-desc'><p>The element to animate</p>\n</div></li><li><span class='pre'>anim</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>The animation type, defined in <a href=\"#!/api/Ext.anims\" rel=\"Ext.anims\" class=\"docClass\">Ext.anims</a></p>\n</div></li><li><span class='pre'>config</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>The config object for the animation</p>\n</div></li></ul></div></div></div><div id='method-toLocaleString' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Object' rel='Object' class='defined-in docClass'>Object</a><br/><a href='source/Object.html#Object-method-toLocaleString' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Object-method-toLocaleString' class='name expandable'>toLocaleString</a>( <span class='pre'></span> ) : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></div><div class='description'><div class='short'>Returns a string representing the object. ...</div><div class='long'><p>Returns a string representing the object. This method is meant to be overridden by derived objects\nfor locale-specific purposes.</p>\n\n<p><code>Object</code>'s <code>toLocaleString</code> returns the result of calling <code>toString</code>.</p>\n\n<p>This function is provided to give objects a generic <code>toLocaleString</code> method, even though not all\nmay use it. Currently, only <code>Array</code>, <code>Number</code>, and <code>Date</code> override <code>toLocaleString</code>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span><div class='sub-desc'><p>Object represented as a string.</p>\n</div></li></ul></div></div></div><div id='method-toString' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Object' rel='Object' class='defined-in docClass'>Object</a><br/><a href='source/Object.html#Object-method-toString' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Object-method-toString' class='name expandable'>toString</a>( <span class='pre'></span> ) : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></div><div class='description'><div class='short'>Returns a string representation of the object. ...</div><div class='long'><p>Returns a string representation of the object.</p>\n\n<p>Every object has a <code>toString()</code> method that is automatically called when the object is to be\nrepresented as a text value or when an object is referred to in a manner in which a string is\nexpected. By default, the <code>toString()</code> method is inherited by every object descended from <code>Object</code>.\nIf this method is not overridden in a custom object, <code>toString()</code> returns \"[object type]\", where\n<code>type</code> is the object type. The following code illustrates this:</p>\n\n<pre><code>var o = new Object();\no.toString();           // returns [object Object]\n</code></pre>\n\n<p>You can create a function to be called in place of the default <code>toString()</code> method. The\n<code>toString()</code> method takes no arguments and should return a string. The <code>toString()</code> method you\ncreate can be any value you want, but it will be most useful if it carries information about the\nobject.</p>\n\n<p>The following code defines the <code>Dog</code> object type and creates <code>theDog</code>, an object of type <code>Dog</code>:</p>\n\n<pre><code>function Dog(name,breed,color,sex) {\n    this.name=name;\n    this.breed=breed;\n    this.color=color;\n    this.sex=sex;\n}\n\ntheDog = new Dog(\"Gabby\",\"Lab\",\"chocolate\",\"female\");\n</code></pre>\n\n<p>If you call the <code>toString()</code> method on this custom object, it returns the default value inherited\nfrom <code>Object</code>:</p>\n\n<pre><code>theDog.toString(); //returns [object Object]\n</code></pre>\n\n<p>The following code creates and assigns <code>dogToString()</code> to override the default <code>toString()</code> method.\nThis function generates a string containing the name, breed, color, and sex of the object, in the\nform <code>\"property = value;\"</code>.</p>\n\n<pre><code>Dog.prototype.toString = function dogToString() {\n    var ret = \"Dog \" + this.name + \" is a \" + this.sex + \" \" + this.color + \" \" + this.breed;\n    return ret;\n}\n</code></pre>\n\n<p>With the preceding code in place, any time theDog is used in a string context, JavaScript\nautomatically calls the <code>dogToString()</code> function, which returns the following string:</p>\n\n<pre><code>Dog Gabby is a female chocolate Lab\n</code></pre>\n\n<p><code>toString()</code> can be used with every object and allows you to get its class. To use the\n<code>Object.prototype.toString()</code> with every object, you need to call <code>Function.prototype.call()</code> or\n<code>Function.prototype.apply()</code> on it, passing the object you want to inspect as the first parameter\ncalled <code>thisArg</code>.</p>\n\n<pre><code>var toString = Object.prototype.toString;\n\ntoString.call(new Date); // [object Date]\ntoString.call(new String); // [object String]\ntoString.call(Math); // [object Math]\n</code></pre>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span><div class='sub-desc'><p>Object represented as a string.</p>\n</div></li></ul></div></div></div><div id='method-valueOf' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Object' rel='Object' class='defined-in docClass'>Object</a><br/><a href='source/Object.html#Object-method-valueOf' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Object-method-valueOf' class='name expandable'>valueOf</a>( <span class='pre'></span> ) : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></div><div class='description'><div class='short'>Returns the primitive value of the specified object. ...</div><div class='long'><p>Returns the primitive value of the specified object.</p>\n\n<p>JavaScript calls the <code>valueOf</code> method to convert an object to a primitive value. You rarely need to\ninvoke the <code>valueOf</code> method yourself; JavaScript automatically invokes it when encountering an\nobject where a primitive value is expected.</p>\n\n<p>By default, the <code>valueOf</code> method is inherited by every object descended from <code>Object</code>. Every built-\nin core object overrides this method to return an appropriate value. If an object has no primitive\nvalue, <code>valueOf</code> returns the object itself, which is displayed as:</p>\n\n<pre><code>[object Object]\n</code></pre>\n\n<p>You can use <code>valueOf</code> within your own code to convert a built-in object into a primitive value.\nWhen you create a custom object, you can override <code><a href=\"#!/api/Object-method-valueOf\" rel=\"Object-method-valueOf\" class=\"docClass\">Object.valueOf</a></code> to call a custom method instead\nof the default <code>Object</code> method.</p>\n\n<p>You can create a function to be called in place of the default <code>valueOf</code> method. Your function must\ntake no arguments.</p>\n\n<p>Suppose you have an object type <code>myNumberType</code> and you want to create a <code>valueOf</code> method for it.\nThe following code assigns a user-defined function to the object's valueOf method:</p>\n\n<pre><code>myNumberType.prototype.valueOf = new Function(functionText)\n</code></pre>\n\n<p>With the preceding code in place, any time an object of type <code>myNumberType</code> is used in a context\nwhere it is to be represented as a primitive value, JavaScript automatically calls the function\ndefined in the preceding code.</p>\n\n<p>An object's <code>valueOf</code> method is usually invoked by JavaScript, but you can invoke it yourself as\nfollows:</p>\n\n<pre><code>myNumber.valueOf()\n</code></pre>\n\n<p>Note: Objects in string contexts convert via the <code>toString</code> method, which is different from\n<code>String</code> objects converting to string primitives using <code>valueOf</code>. All objects have a string\nconversion, if only <code>\"[object type]\"</code>. But many objects do not convert to number, boolean, or\nfunction.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></span><div class='sub-desc'><p>Returns value of the object or the object itself.</p>\n</div></li></ul></div></div></div></div></div></div></div>","requires":[],"meta":{},"files":[{"href":"Anim.html#Ext-Anim","filename":"Anim.js"}]});