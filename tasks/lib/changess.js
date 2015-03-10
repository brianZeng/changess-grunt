/*
  Returns a Parser object of the following structure:

  Parser: {
    yy: {}
  }

  Parser.prototype: {
    yy: {},
    trace: function(),
    symbols_: {associative list: name ==> number},
    terminals_: {associative list: number ==> name},
    productions_: [...],
    performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$),
    table: [...],
    defaultActions: {...},
    parseError: function(str, hash),
    parse: function(input),

    lexer: {
        EOF: 1,
        parseError: function(str, hash),
        setInput: function(input),
        input: function(),
        unput: function(str),
        more: function(),
        less: function(n),
        pastInput: function(),
        upcomingInput: function(),
        showPosition: function(),
        test_match: function(regex_match_array, rule_index),
        next: function(),
        lex: function(),
        begin: function(condition),
        popState: function(),
        _currentRules: function(),
        topState: function(),
        pushState: function(condition),

        options: {
            ranges: boolean           (optional: true ==> token location info will include a .range[] member)
            flex: boolean             (optional: true ==> flex-like lexing behaviour where the rules are tested exhaustively to find the longest match)
            backtrack_lexer: boolean  (optional: true ==> lexer regexes are tested in order and for each matching regex the action code is invoked; the lexer terminates the scan when a token is returned by the action code)
        },

        performAction: function(yy, yy_, $avoiding_name_collisions, YY_START),
        rules: [...],
        conditions: {associative list: name ==> set},
    }
  }


  token location info (@$, _$, etc.): {
    first_line: n,
    last_line: n,
    first_column: n,
    last_column: n,
    range: [start_number, end_number]       (where the numbers are indexes into the input string, regular zero-based)
  }


  the parseError function receives a 'hash' object with these members for lexer and parser errors: {
    text:        (matched text)
    token:       (the produced terminal token, if any)
    line:        (yylineno)
  }
  while parser (grammar) errors will also provide these members, i.e. parser errors deliver a superset of attributes: {
    loc:         (yylloc)
    expected:    (string describing the set of expected tokens)
    recoverable: (boolean: TRUE when the parser has a error recovery rule available for this particular error)
  }
*/
var parser = (function(){
var o=function(k,v,o,l){for(o=o||{},l=k.length;l--;o[k[l]]=v);return o},$V0=[1,14],$V1=[1,13],$V2=[1,11],$V3=[1,9],$V4=[1,10],$V5=[1,4,31,37,40,41,50],$V6=[1,18],$V7=[1,4,24,31,37,40,41,50],$V8=[1,24],$V9=[1,22],$Va=[1,31],$Vb=[1,29],$Vc=[13,34,39],$Vd=[1,4,7,9,10,11,12,13,14,15,18,19,20,22,24,27,30,31,34,35,37,40,41,50],$Ve=[1,43],$Vf=[1,48],$Vg=[1,46],$Vh=[1,47],$Vi=[1,4,20,24,27,30,31,35,37,40,41,50],$Vj=[13,20,34,47],$Vk=[1,55],$Vl=[13,20,34,44,47],$Vm=[1,65],$Vn=[1,68],$Vo=[1,69],$Vp=[1,70],$Vq=[1,62],$Vr=[1,63],$Vs=[1,64],$Vt=[20,27,30,31,35,40,41],$Vu=[1,77],$Vv=[20,24,27,30,31,35,40,41],$Vw=[20,24,27,30,31,34,35,40,41],$Vx=[14,24],$Vy=[1,4,7,10,13,14,15,18,19,20,24,27,30,31,35,37,40,41,50],$Vz=[1,89],$VA=[1,90],$VB=[1,91],$VC=[1,92],$VD=[1,4,7,9,10,11,12,13,14,15,18,19,20,24,27,30,31,35,37,40,41,50],$VE=[1,4,7,9,10,13,14,15,18,19,20,24,27,30,31,35,37,40,41,50];
var parser = {trace: function trace() { },
yy: {},
symbols_: {"error":2,"var":3,"VAR":4,"POINTER":5,"exp":6,"NUMBER":7,"inlineFunc":8,"+":9,"-":10,"*":11,"/":12,"(":13,")":14,"FUNCNAME":15,"list":16,"property":17,"STRING":18,"URL":19,"IDENT":20,"assignPair":21,":":22,"assignList":23,";":24,"defParamList":25,"includeCall":26,"INCLUDE":27,"scopeBodyPart":28,"style":29,"EXTENDS":30,"SELECTOR":31,"scopeBody":32,"scope":33,"{":34,"}":35,"mixScope":36,"MIXIN":37,"selectors":38,",":39,"MEDIA":40,"KEYFRAMES":41,"m_exp":42,"m_query":43,"M_ADD":44,"m_qlist":45,"sheetPart":46,"TREATAS":47,"sheet":48,"SHEET":49,"EOF":50,"$accept":0,"$end":1},
terminals_: {2:"error",4:"VAR",5:"POINTER",7:"NUMBER",9:"+",10:"-",11:"*",12:"/",13:"(",14:")",15:"FUNCNAME",18:"STRING",19:"URL",20:"IDENT",22:":",24:";",27:"INCLUDE",30:"EXTENDS",31:"SELECTOR",34:"{",35:"}",37:"MIXIN",39:",",40:"MEDIA",41:"KEYFRAMES",44:"M_ADD",47:"TREATAS",49:"SHEET",50:"EOF"},
productions_: [0,[3,2],[3,1],[6,1],[6,1],[6,1],[6,3],[6,3],[6,3],[6,3],[6,2],[6,3],[8,3],[8,4],[17,1],[17,1],[17,1],[17,1],[16,1],[16,2],[21,3],[23,1],[23,3],[23,2],[25,2],[25,3],[26,3],[26,2],[28,3],[28,1],[28,1],[28,2],[28,3],[28,2],[32,1],[32,2],[33,3],[33,4],[33,3],[33,2],[36,3],[38,1],[38,3],[29,2],[29,3],[29,3],[42,3],[42,5],[43,1],[43,1],[43,3],[45,2],[45,3],[46,1],[46,2],[46,4],[46,4],[46,1],[46,1],[46,2],[48,4],[48,3],[48,1],[48,4],[48,2],[48,2]],
performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate /* action[1] */, $$ /* vstack */, _$ /* lstack */) {
/* this == yyval */

var $0 = $$.length - 1;
switch (yystate) {
case 1:
this.$=new Var($$[$0-1],$$[$0]);
break;
case 2:
this.$=new Var($$[$0],yy.sheetName);
break;
case 3:
this.$=new Exp(new Length($$[$0]));
break;
case 4: case 5:
this.$=new Exp($$[$0]);
break;
case 6: case 7: case 8: case 9:
this.$= new Exp($$[$0-2],$$[$0-1],$$[$0]);
break;
case 10:
this.$=new Exp(new Length('0'),'-',$$[$0]);
break;
case 11: case 25: case 36:
this.$=$$[$0-1];
break;
case 12:
this.$=new InlineFunc($$[$0-2]);
break;
case 13:
this.$=new InlineFunc($$[$0-3],$$[$0-1].reduce());
break;
case 14:
this.$=$$[$0].resolve();
break;
case 15:
this.$=$$[$0][0]=='@'? $$[$0].substr(2,$$[$0].length-3):$$[$0];
break;
case 17:
this.$=Color.parse($$[$0])||$$[$0];
break;
case 18: case 41:
this.$=new List($$[$0]);
break;
case 19:
$$[$0-1].push($$[$0]);
break;
case 20:
this.$={name:$$[$0-2],value:$$[$0].resolve()};
break;
case 21:
this.$={};this.$[$$[$0].name]=$$[$0].value;
break;
case 22:
$$[$0-2][$$[$0].name]=$$[$0].value
break;
case 24:
this.$={};
break;
case 26:
this.$={name:$$[$0-1].toString(),value:$$[$0]};
break;
case 27:
this.$={name:$$[$0].toString(),value:{}};
break;
case 28:
this.$={name:$$[$0-2],value:$$[$0].resolve(),type:'rule'};
break;
case 29:
this.$={type:'style',value:$$[$0]};
break;
case 30:
$$[$0].type='include';
break;
case 31:
this.$={type:'ext',name:$$[$0]};
break;
case 32:
this.$={type:'ext',name:$$[$0-1],sheetName:$$[$0]};
break;
case 34:
this.$=new Scope().add($$[$0])
break;
case 35:
this.$=$$[$0-1].add($$[$0]);
break;
case 37:
this.$=$$[$0-1].addDefValues($$[$0-3]);
break;
case 38:
this.$=new Scope().addDefValues($$[$0-2]);
break;
case 39:
this.$=new Scope()
break;
case 40:
this.$={name:$$[$0-1],value:$$[$0]}
break;
case 42: case 50:
$$[$0-2].add($$[$0]);
break;
case 43:
this.$=new Style($$[$0-1],$$[$0]);
break;
case 44:
this.$=$$[$0].asMediaQuery(null,$$[$0-1]);
break;
case 45:
this.$=$$[$0].asKeyFrames($$[$0-2],$$[$0-1]);
break;
case 46:
this.$={key:$$[$0-1]};
break;
case 47:
this.$={key:$$[$0-3],value:$$[$0-1]};
break;
case 48:
this.$=new MediaQuery($$[$0]);
break;
case 49:
this.$=new MediaQuery('',$$[$0]);;
break;
case 51:
this.$=$$[$0];
break;
case 52:
$$[$0-2].merge($$[$0]);
break;
case 53:
this.$={type:'style',value:$$[$0]}
break;
case 54:
this.$={value:$$[$0].asMediaQuery($$[$0-1].reduce()),type:'style'};
break;
case 55:
this.$={value:$$[$0].asMediaQuery($$[$0-3].reduce(),$$[$0-1]),type:'style'};
break;
case 56:
this.$={value:$$[$0-3].reduce(),type:'media',key:$$[$0-1]};
break;
case 57:
$$[$0].type='mix';
break;
case 58:
$$[$0].type='var';
break;
case 60:
this.$=new Sheet($$[$0-2]).add($$[$0]);yy.sheetName=$$[$0-2];
break;
case 61:
this.$=new Sheet($$[$0-1]).add($$[$0]);yy.sheetName=$$[$0-1];
break;
case 62:
this.$=new Sheet().add($$[$0]);yy.sheetName=ChangeSS.opt.defaultSheetName;
break;
case 63:
return new Sheet($$[$0-2]);
break;
case 64:
$$[$0-1].add($$[$0]);
break;
case 65:
return this.$=$$[$0-1];
break;
}
},
table: [{3:12,4:$V0,21:7,29:4,31:$V1,36:6,37:$V2,38:8,40:$V3,41:$V4,45:5,46:3,48:1,49:[1,2]},{1:[3],3:12,4:$V0,21:7,29:4,31:$V1,36:6,37:$V2,38:8,40:$V3,41:$V4,45:5,46:15,50:[1,16]},{20:[1,17]},o($V5,[2,62],{24:$V6}),o($V7,[2,53]),{13:$V8,20:[1,21],25:23,33:19,34:$V9,47:[1,20]},o($V7,[2,57]),o($V7,[2,58]),{13:$V8,25:23,33:25,34:$V9,39:[1,26]},{3:27,4:$V0,13:$Va,20:$Vb,42:30,43:28},{31:[1,32]},{3:33,4:$V0},{22:[1,34]},o($Vc,[2,41]),o($Vd,[2,2],{5:[1,35]}),o($V5,[2,64],{24:$V6}),o($V5,[2,65]),{3:12,4:$V0,21:7,24:[1,36],29:4,31:$V1,36:6,37:$V2,38:8,40:$V3,41:$V4,45:5,46:37},o($V7,[2,59]),o($V7,[2,54]),{4:[1,38]},{13:$Va,20:$Vb,42:30,43:39},{20:$Ve,26:45,27:$Vf,28:42,29:44,30:$Vg,31:$V1,32:40,35:[1,41],38:8,40:$Vh,41:$V4},{34:[1,49]},{3:12,4:$V0,14:[1,50],21:52,23:51},o($Vi,[2,43]),{31:[1,53]},{13:$V8,25:23,33:54,34:$V9},o($Vj,[2,51],{44:$Vk}),o($Vl,[2,48]),o($Vl,[2,49]),{20:[1,56]},{13:$V8,25:23,33:57,34:$V9},{13:$V8,25:23,33:58,34:$V9},{3:66,4:$V0,6:61,7:$Vm,8:67,10:$Vn,13:$Vo,15:$Vp,16:59,17:60,18:$Vq,19:$Vr,20:$Vs},o($Vd,[2,1]),{3:12,4:$V0,21:7,29:4,31:$V1,36:6,37:$V2,38:8,40:$V3,41:$V4,45:5,46:71,50:[1,72]},o($V5,[2,61],{24:$V6}),{13:$V8,24:[1,74],25:23,33:73,34:$V9},o($Vj,[2,52],{44:$Vk}),{20:$Ve,26:45,27:$Vf,28:76,29:44,30:$Vg,31:$V1,35:[1,75],38:8,40:$Vh,41:$V4},o($Vi,[2,39]),o($Vt,[2,34],{24:$Vu}),{22:[1,78]},o($Vv,[2,29]),o($Vv,[2,30]),{31:[1,79]},{3:27,4:$V0},{3:80,4:$V0},{20:$Ve,26:45,27:$Vf,28:42,29:44,30:$Vg,31:$V1,32:81,35:[1,82],38:8,40:$Vh,41:$V4},o($Vw,[2,24]),{14:[1,83],24:[1,84]},o($Vx,[2,21]),o($Vc,[2,42]),o($Vi,[2,44]),{13:$Va,42:85},{14:[1,86],22:[1,87]},o($Vi,[2,45]),o($V7,[2,40]),o([1,14,24,31,37,40,41,50],[2,20],{6:61,3:66,8:67,17:88,4:$V0,7:$Vm,10:$Vn,13:$Vo,15:$Vp,18:$Vq,19:$Vr,20:$Vs}),o($Vy,[2,18]),o([1,4,7,13,14,15,18,19,20,24,27,30,31,35,37,40,41,50],[2,14],{9:$Vz,10:$VA,11:$VB,12:$VC}),o($Vy,[2,15]),o($Vy,[2,16]),o($Vy,[2,17]),o($VD,[2,3]),o($VD,[2,4]),o($VD,[2,5]),{3:66,4:$V0,6:93,7:$Vm,8:67,10:$Vn,13:$Vo,15:$Vp},{3:66,4:$V0,6:94,7:$Vm,8:67,10:$Vn,13:$Vo,15:$Vp},{13:[1,95]},o($V5,[2,60],{24:$V6}),o($V5,[2,63]),o($V7,[2,55]),o($V7,[2,56]),o($Vi,[2,36]),o($Vt,[2,35],{24:$Vu}),o($Vv,[2,33]),{3:66,4:$V0,6:61,7:$Vm,8:67,10:$Vn,13:$Vo,15:$Vp,16:96,17:60,18:$Vq,19:$Vr,20:$Vs},o($Vv,[2,31],{5:[1,97]}),o($Vv,[2,27],{25:98,13:$V8}),{20:$Ve,26:45,27:$Vf,28:76,29:44,30:$Vg,31:$V1,35:[1,99],38:8,40:$Vh,41:$V4},o($Vi,[2,38]),o($Vw,[2,25]),o($Vx,[2,23],{3:12,21:100,4:$V0}),o($Vl,[2,50]),o($Vl,[2,46]),{3:66,4:$V0,6:61,7:$Vm,8:67,10:$Vn,13:$Vo,15:$Vp,16:101,17:60,18:$Vq,19:$Vr,20:$Vs},o($Vy,[2,19]),{3:66,4:$V0,6:102,7:$Vm,8:67,10:$Vn,13:$Vo,15:$Vp},{3:66,4:$V0,6:103,7:$Vm,8:67,10:$Vn,13:$Vo,15:$Vp},{3:66,4:$V0,6:104,7:$Vm,8:67,10:$Vn,13:$Vo,15:$Vp},{3:66,4:$V0,6:105,7:$Vm,8:67,10:$Vn,13:$Vo,15:$Vp},o($VD,[2,10]),{9:$Vz,10:$VA,11:$VB,12:$VC,14:[1,106]},{3:66,4:$V0,6:61,7:$Vm,8:67,10:$Vn,13:$Vo,14:[1,107],15:$Vp,16:108,17:60,18:$Vq,19:$Vr,20:$Vs},o([24,27,30,31,35,40,41],[2,28],{6:61,3:66,8:67,17:88,4:$V0,7:$Vm,10:$Vn,13:$Vo,15:$Vp,18:$Vq,19:$Vr,20:$Vs}),o($Vv,[2,32]),o($Vv,[2,26]),o($Vi,[2,37]),o($Vx,[2,22]),{3:66,4:$V0,6:61,7:$Vm,8:67,10:$Vn,13:$Vo,14:[1,109],15:$Vp,17:88,18:$Vq,19:$Vr,20:$Vs},o($VE,[2,6],{11:$VB,12:$VC}),o($VE,[2,7],{11:$VB,12:$VC}),o($VD,[2,8]),o($VD,[2,9]),o($VD,[2,11]),o($VD,[2,12]),{3:66,4:$V0,6:61,7:$Vm,8:67,10:$Vn,13:$Vo,14:[1,110],15:$Vp,17:88,18:$Vq,19:$Vr,20:$Vs},o($Vl,[2,47]),o($VD,[2,13])],
defaultActions: {},
parseError: function parseError(str, hash) {
    if (hash.recoverable) {
        this.trace(str);
    } else {
        throw new Error(str);
    }
},
parse: function parse(input) {
    var self = this, stack = [0], tstack = [], vstack = [null], lstack = [], table = this.table, yytext = '', yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
    var args = lstack.slice.call(arguments, 1);
    var lexer = Object.create(this.lexer);
    var sharedState = { yy: {} };
    for (var k in this.yy) {
        if (Object.prototype.hasOwnProperty.call(this.yy, k)) {
            sharedState.yy[k] = this.yy[k];
        }
    }
    lexer.setInput(input, sharedState.yy);
    sharedState.yy.lexer = lexer;
    sharedState.yy.parser = this;
    if (typeof lexer.yylloc == 'undefined') {
        lexer.yylloc = {};
    }
    var yyloc = lexer.yylloc;
    lstack.push(yyloc);
    var ranges = lexer.options && lexer.options.ranges;
    if (typeof sharedState.yy.parseError === 'function') {
        this.parseError = sharedState.yy.parseError;
    } else {
        this.parseError = Object.getPrototypeOf(this).parseError;
    }
    function popStack(n) {
        stack.length = stack.length - 2 * n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }
    _token_stack:
        function lex() {
            var token;
            token = lexer.lex() || EOF;
            if (typeof token !== 'number') {
                token = self.symbols_[token] || token;
            }
            return token;
        }
    var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
    while (true) {
        state = stack[stack.length - 1];
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol === null || typeof symbol == 'undefined') {
                symbol = lex();
            }
            action = table[state] && table[state][symbol];
        }
                    if (typeof action === 'undefined' || !action.length || !action[0]) {
                var errStr = '';
                expected = [];
                for (p in table[state]) {
                    if (this.terminals_[p] && p > TERROR) {
                        expected.push('\'' + this.terminals_[p] + '\'');
                    }
                }
                if (lexer.showPosition) {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ':\n' + lexer.showPosition() + '\nExpecting ' + expected.join(', ') + ', got \'' + (this.terminals_[symbol] || symbol) + '\'';
                } else {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ': Unexpected ' + (symbol == EOF ? 'end of input' : '\'' + (this.terminals_[symbol] || symbol) + '\'');
                }
                this.parseError(errStr, {
                    text: lexer.match,
                    token: this.terminals_[symbol] || symbol,
                    line: lexer.yylineno,
                    loc: yyloc,
                    expected: expected
                });
            }
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error('Parse Error: multiple actions possible at state: ' + state + ', token: ' + symbol);
        }
        switch (action[0]) {
        case 1:
            stack.push(symbol);
            vstack.push(lexer.yytext);
            lstack.push(lexer.yylloc);
            stack.push(action[1]);
            symbol = null;
            if (!preErrorSymbol) {
                yyleng = lexer.yyleng;
                yytext = lexer.yytext;
                yylineno = lexer.yylineno;
                yyloc = lexer.yylloc;
                if (recovering > 0) {
                    recovering--;
                }
            } else {
                symbol = preErrorSymbol;
                preErrorSymbol = null;
            }
            break;
        case 2:
            len = this.productions_[action[1]][1];
            yyval.$ = vstack[vstack.length - len];
            yyval._$ = {
                first_line: lstack[lstack.length - (len || 1)].first_line,
                last_line: lstack[lstack.length - 1].last_line,
                first_column: lstack[lstack.length - (len || 1)].first_column,
                last_column: lstack[lstack.length - 1].last_column
            };
            if (ranges) {
                yyval._$.range = [
                    lstack[lstack.length - (len || 1)].range[0],
                    lstack[lstack.length - 1].range[1]
                ];
            }
            r = this.performAction.apply(yyval, [
                yytext,
                yyleng,
                yylineno,
                sharedState.yy,
                action[1],
                vstack,
                lstack
            ].concat(args));
            if (typeof r !== 'undefined') {
                return r;
            }
            if (len) {
                stack = stack.slice(0, -1 * len * 2);
                vstack = vstack.slice(0, -1 * len);
                lstack = lstack.slice(0, -1 * len);
            }
            stack.push(this.productions_[action[1]][0]);
            vstack.push(yyval.$);
            lstack.push(yyval._$);
            newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
            stack.push(newState);
            break;
        case 3:
            return true;
        }
    }
    return true;
}};

function popUntil(lexer,state){
  while(lexer.topState()!==state)
    lexer.popState();
}
/**
 * Created by 柏然 on 2014/11/1.
 */
ChangeSS = (function (parser) {
  var sheetMap = {}, getter, setter;
  /**
   * @name ChangeSS.parseOptions
   * @type {{lib: Array.<ChangeSS.Sheet>}}
   */
  var defOpt={lib:[]};

  /**
   * @namespace ChangeSS
   * @global
   * @param   {string}source
   * @param   {ChangeSS.parseOptions|Object}[opt]
   * @returns {string}
   */
  function main(source, opt) {
    return parseAndLink(source,opt||defOpt).map(function (sheet) {
      return sheet.toString();
    }).join('\n');
  }
  /**
   * @name ChangeSS.parse
   * @param {String}source
   * @param {ChangeSS.parseOptions|Object}[opt]
   * @returns {Array.<ChangeSS.Sheet>}
   */
  main.parse=function(source,opt){
    clear();
    return parseAndMerge(source,opt);
  };
  main.compile=parseAndLink;
  main.error = {
    notExist: function (name) {
      throw Error('cannot get:' + name);
    },parseError:function(msg){
       throw Error(msg);
    }
  };
  parser.yy.parseError=parser.parseError=function(errStr,err){
    main.error.parseError(errStr,err);
  };
  main.get = function (name, type) {
    name = name || main.opt.defaultSheetName;
    type = (type || '').toLowerCase();
    switch (type) {
      case 'mixin':case 'scope':case 'media':
        return getter.fromFullName(name, type);
      case 'var':
        return getter.variable(name);
      case 'styles':
        return getter.styles(name);
      default :
        return getter.sheet(name);
    }
  };
  main.add = function (something, value) {
    if (something instanceof Sheet) setter.sheet(something);
    else if (something instanceof Var) setter.Var(something, value);
    return this;
  };
  /**
   * @name ChangeSS.opt
   * @type {{
   * addKeyFramesVendorPrefix: boolean,
   * preferKeyFramesVendorPrefix: boolean,
   * vendorPrefix:string,
   * defaultSheetName:string
   * }}
   */
  main.opt = {
    addKeyFramesVendorPrefix:true,
    preferKeyFramesVendorPrefix:true,
    defaultSheetName:'default',
    vendorPrefix:(function(){
      if(typeof window!=="undefined"&&window.getComputedStyle){
        for(var i= 0,styles=window.getComputedStyle(document.documentElement,''),pre,len=styles.length;i<len;i++){
          if(pre=styles[i].match(/-(moz|webkit|ms|o)-/))break;
        }
        if(pre)return pre[1];
        return styles.OLink? 'o':'';
      }
      return '';
    })()
  };
  getter = {
    sheet: function (name) {
      name = name || main.opt.defaultSheetName;
      var sheet = sheetMap[name];
      return sheet || (sheetMap[name] = new Sheet(name));
    },
    fromFullName: function (name, type) {
      var names = name.split('->'), sheetName = names[1], sheet;
      if (!sheetName)return undefined;
      if (!(sheet = sheetMap[sheetName]))return ChangeSS.error.notExist(name);
      return sheet.get(names[0], type) || ChangeSS.error.notExist(name);
    },
    variable: function (name) {
      var i = name.indexOf('->'), sheetName = name.substr(i + 2), symbol = name.substr(0, i), sheet;
      if (!sheetName || !(sheet = sheetMap[sheetName]) || !symbol)return undefined;
      return sheet.vars[symbol];
    },
    styles: function (globalName) {
      var i = globalName.indexOf('->'), sheet = sheetMap[globalName.substr(i + 2)] || ChangeSS.error.notExist(globalName);
      return sheet.getStyles(globalName.substr(0, i));
    }
  };
  setter = {
    Var: function (Var, value) {
      var sheet = getter.sheet(Var.sheetName);
      sheet.vars[Var.symbol] = value;
      Var.sheetName = '';
    },
    sheet: function (sheet) {
      var name = sheet.name || main.opt.defaultSheetName, os = getter.sheet(name);
      os.merge(sheet);
    }
  };
  var sheetSplitReg= /((\@sheetname)[\s\S]*?(?=\2)|\2[\s\S]*$)/g;
  return main;

  function parseInput(input) {
    var results=[];
    if(input instanceof Array)
      input.forEach(loadFile);
    else if(typeof input==="string") loadFile(input);
    return results.map(parseSheet);
    function parseSheet(src){
      return parser.parse(src).validate()
    }
    function loadFile(input){
      var range,i=input.indexOf('@sheetname');
      if(i==-1)
        results.push(input);
      else{
        if(i!==0)input='@sheetname '+main.opt.defaultSheetName+';'+input;
        while (range=sheetSplitReg.exec(input)[0])
          results.push(range);
        sheetSplitReg.exec();
      }
      return results;
    }
  }


  function parseAndMerge(source,opt){
    var results = List();
    parseInput(source).forEach(function (sheet) {
      results.add(merge(sheet));
    });
    return results;
  }
  /**
   * @name ChangeSS.compile
   * @param {string}source
   * @param {ChangeSS.parseOptions|Object}[opt]
   * @returns {Array.<ChangeSS.Sheet>}
   */
  function parseAndLink(source, opt) {
    var results,lib;
    clear();
    if(opt&&(lib=opt.lib))
      lib.forEach(function(sheet){merge(sheet.clone());});
    ChangeSS.link(results=parseAndMerge(source,opt));
    return results;
  }
  function clear() {
    sheetMap = {};
  }
  function merge(obj) {
    if (obj instanceof Sheet) return getter.sheet(obj.name).merge(obj);
    else throw 'not implement';
  }
})(parser);
ChangeSS.assign = assign;
ChangeSS.traceLog = true;
function mix() {
  for (var i = 0, o = {}, item , len = arguments.length; i < len; i++)
    if (item = arguments[i])
    Object.getOwnPropertyNames(item).forEach(function (key) {
      o[key] = item[key];
    });
  return o;
}
function arrMap(arr,mapFun,thisObj){
  var func=mapFun;
  thisObj=thisObj||arr;
  if(typeof mapFun=="string")func=function(item){return item[mapFun]};
  else if(typeof mapFun!=="function")throw Error('type of map function invalid');
  for(var i= 0,len=arr.length,r=new Array(len);i<len;i++)
    r[i]=func(arr[i],i,thisObj)
  return r;
}
function objForEach(obj, callback, thisObj, arg) {
  thisObj = thisObj || obj;
  if (typeof obj == "object" && obj)
    for (var i = 0, keys = Object.getOwnPropertyNames(obj), key = keys[0]; key !== undefined; key = keys[++i])
      callback.apply(thisObj, [obj[key],key, arg]);
  return thisObj;
}
(function (parser) {
  return parser.errorHandler = {
    expect: function (yy, char, ret, error) {
      var lexer = yy.lexer;
      if (lexer.upcomingInput() == char) return ret;
      else if (error)
        Error('expect:' + char + "after" + yy.matched);
      return false;
    }
  }
})(parser);
/**
 * @enum {string}
 * @name ChangeSS.TYPE
 * @type {{NONE: string, EXP: string, VAR: string, LENGTH: string, FUNC: string, KEYWORD: string, LIST: string,COLOR:string}}
 */
var TYPE=ChangeSS.TYPE = {
  NONE: 'no',
  EXP: 'exp',
  COLOR:'color',
  VAR: 'var',
  LENGTH: 'len',
  FUNC: 'fun',
  KEYWORD: 'keyword',
  LIST: 'list'
};
/**
 * @name ChangeSS.getType
 * @param {*}side
 * @param {boolean}[asNone]
 * @returns {String|Error}
 */
ChangeSS.getType = function (side, asNone) {
  var type;
  if (!side)return TYPE.NONE;
  if (typeof side == "string") return TYPE.KEYWORD;
  else if (type = side._type) return type;
  else if (asNone)return TYPE.NONE;
  throw  Error('unknown type');
};
if(typeof module!=="undefined" && module.exports)
  module.exports=ChangeSS;
/**
 * Created by 柏然 on 2014/11/1.
 */
function Length(str) {
  if (!(this instanceof Length)) return new Length(str);
  var m;
  if (!isNaN(str)) {
    this.num = parseFloat(str);
    this.unit = '';
  }
  if (typeof str == "string") {
    m = str.match(/^\-?((\d+(\.\d+)?)|(\.\d+))/);
    if (m) {
      this.num = parseFloat(m[0]);
      this.unit = str.substr(m[0].length);
    }
    else return str;
  }
}
Length.parse = function (str, unit) {
  if (str instanceof Length) return str.clone();
  var l = new Length(str);
  if (unit !== undefined) l.unit = unit.trim();
  return isNaN(l.num) ? undefined : l;
};
Length.toFixed = function (num, fractionalDititals) {
  var m = Number(num).toFixed(fractionalDititals || Length.fractionalDigitals).match(/^\-?\d+(\.(0*[1-9])+)?/);
  return m ? m[0] : NaN;
};
Length.fractionalDigitals = 4;
Length.convertTable = {
  rad: {
    pi: function (n) {
      return n / Math.PI;
    },
    deg: function (n) {
      return n / Math.PI * 180;
    }
  },
  deg: {
    pi: function (n) {
      return n / 180;
    },
    rad: function (n) {
      return n / 180 * Math.PI;
    }
  },
  pi: {
    rad: function (n) {
      return n * Math.PI;
    },
    deg: function (n) {
      return n * 180;
    }
  }
};
Length.prototype = {
  _type: ChangeSS.TYPE.LENGTH,
  clone: function () {
    return new Length(this.num + this.unit);
  },
  opt: function (opt, exp) {
    var num, unit = this.unit, otherUnit = exp.unit;
    if (!exp) return this.clone();
    if (otherUnit && unit !== otherUnit)
      num = exp.convert(otherUnit, unit);
    else num = exp.num;
    unit = unit || otherUnit;
    switch (opt) {
      case '+':
        return new Length(this.num + num + unit);
      case '-':
        return new Length(this.num - num + unit);
      case '*':
        return new Length(this.num * num + unit);
      case '/':
        return new Length(this.num / num + unit);
      default :
        throw  'unkonwn optor:' + opt;
    }
  },
  convert: function (otherUnit, thisUnit) {
    var num = this.num, func = Length.convertTable[(thisUnit || this.unit).toLowerCase()];
    if (func && (func = func[otherUnit.toLowerCase()]))return func(num);
    return num;
  },
  toString: function () {
    return isNaN(this.num) ? 'NaN' : (Length.toFixed(this.num) + this.unit);
  },
  reduce: function () {
    return this;
  },
  resolve: function () {
    return this.clone();
  },
  get value() {
    return this.toString();
  }
};
ChangeSS.Length = Length;/**
 * Created by 柏然 on 2014/11/1.
 */
function Var(symbol, sheetName) {
  if (!(this instanceof Var))return new Var(symbol, sheetName);
  this.symbol = symbol.trim();
  this.sheetName = Sheet.trim(sheetName);
}

Var.prototype = (function (TYPE) {
  var VAR = TYPE.VAR, getType = ChangeSS.getType, LEN = TYPE.LENGTH, KEYWORD = TYPE.KEYWORD;

  function isVar(obj) {
    return getType(obj, true) === VAR;
  }
  Var.isVar = isVar;
  return{
    _type: ChangeSS.TYPE.VAR,
    toString: function () {
      var sheetName = this.sheetName;
      return sheetName ? this.symbol + '->' + sheetName : this.symbol;
    },
    get hasVars() {
      return true;
    },
    clone: function () {
      return new Var(this.symbol, this.sheetName);
    },
    reduce: function () {
      return this;
    },
    findRef: function () {
      var value = this, cycle = new Graph();
      while (isVar(value) && value.sheetName) {
        if (cycle.hasVertex(value))
          ChangeSS.error.cyclicInherit(cycle.vertexes.map(function (v) {
            return '[' + v + ']->'
          }), cycle);
        cycle.addVertex(value);
        value = ChangeSS.get(value.toString(), 'var');
      }
      return value;
    },
    resolve: function ($vars) {
      var value, real = this.findRef();
      if (isVar(real) || real == undefined) {
        if ($vars)value = $vars[this.symbol];
      }
      else value = real;
      if (isVar(value))
        if (isVar(real = value.findRef()))return this.clone();
        else value = real;
      return value || this.clone();
    },
    equals:function(obj){
      return obj instanceof Var&& obj.symbol===this.symbol&&obj.sheetName==this.sheetName;
    },
    getVar: function (array) {
      array = array || [];
      List.arrayAdd(array, this.symbol);
      return array;
    },
    canResolve: function ($param) {
      var t = getType(this.resolve($param));
      return t == LEN || t == KEYWORD;
    }
  }
})(ChangeSS.TYPE);

ChangeSS.Var = Var;/**
 * Created by 柏然 on 2014/11/1.
 */
//TODO add no default
function Exp(left, optor, right) {
  if (!(this instanceof Exp))return new Exp(left, optor, right);
  this.left = left;
  if (right)this.right = right;
  if (optor) this.optor = optor;
}
Exp.prototype = {
    _type: TYPE.EXP,
    opt: function (opt, exp) {
      var left = this.left;
      if (left instanceof Length && exp instanceof Length)
        this.left = left.opt(opt, exp);
      else {
        this.optor = opt;
        this.right = exp;
      }
      return this;
    },
    get value() {
      if (this.hasVars) return undefined;
      switch (this.type) {
        case TYPE.KEYWORD:
        case TYPE.LENGTH:
        case TYPE.COLOR:
          return this.left;
        case TYPE.FUNC:
        case TYPE.LIST:
          return this.left.value;
        default:
          return this.left.opt(this.optor, this.right);
      }
    },
    reduce: function () {
      var left = this.left.resolve(), right = this.right ? this.right.resolve() : undefined, rtype = ChangeSS.getType(right), ltype = ChangeSS.getType(left);
      if (rtype == TYPE.NONE) {
        if (ltype == TYPE.EXP) {
          this.left = left.left;
          this.right = left.right;
          this.optor = left.optor;
        }
        else {
          this.left = left;
          delete this.optor;
          delete this.right;
        }
      }
      else if (ltype == TYPE.LENGTH && rtype == ltype) {
        this.left = left.opt(this.optor, right);
        delete this.optor;
        delete this.right;
      }
      else {
        this.left = left;
        this.right = right;
      }
      return this.clearVarNames();
    },
    canResolve: function ($vars) {
      return this.getVar().every(function (v) {
        return v.canResolve($vars);
      });
    },
    clearVarNames: function () {
      delete this.variables;
      var left = this.left, right = this.right;
      if (left.clearVarNames)left.clearVarNames();
      if (right && right.clearVarNames)right.clearVarNames();
      return this;
    },
    get hasVars() {
      var a = this.getVar();
      return a.length > 0;
    },
    resolve: (function () {
      var TYPE = ChangeSS.TYPE, getType = ChangeSS.getType;

      function resolveSide(side, $param, exp) {
        switch (getType(side)) {
          case TYPE.VAR:
          case TYPE.FUNC:
          case TYPE.EXP:
          case TYPE.LIST:
            exp.clearVarNames();
            return side.resolve($param);
          case TYPE.KEYWORD:
          case TYPE.LENGTH:
            return side;
          case TYPE.NONE:
            return undefined;
        }
      }

      function clone(obj) {
        return obj.clone ? obj.clone() : obj;
      }

      return function ($resolved) {
        var left = resolveSide(this.left, $resolved, this), right = resolveSide(this.right, $resolved, this), ltype = getType(left), rtype = getType(right), ret;
        this.clearVarNames();
        if (rtype == TYPE.NONE)
          return clone(left);
        switch (ltype) {
          case TYPE.VAR:
          case TYPE.FUNC:
          case TYPE.EXP:
          case TYPE.LIST:
            return new Exp(clone(left), this.optor, clone(right));
        }
        switch (rtype) {
          case TYPE.VAR:
          case TYPE.FUNC:
          case TYPE.EXP:
          case TYPE.LIST:
            return new Exp(clone(left), this.optor, clone(right));
          case TYPE.LENGTH:
            if (ltype == TYPE.LENGTH) return clone(left).opt(this.optor, clone(right));
        }
        Error('invalid Exp:left->' + ltype + ';right->' + rtype);
      }

    })(),
    getVar: function (array) {
      var vars;
      if (!(vars = this.variables)) {
        var left = this.left, right = this.right;
        vars = this.variables = [];
        if (left instanceof Var) List.arrayAdd(vars, left);
        else if (left.getVar) left.getVar(vars);
        if (right)
          if (right instanceof Var)List.arrayAdd(vars, right);
          else if (right.getVar) right.getVar(vars);
      }
      array = array || [];
      vars.forEach(function (symbol) {
        List.arrayAdd(array, symbol)
      });
      return array;
    },
    clone: function () {
      var left = this.left, r = new Exp(left.clone ? left.clone(true) : left), right;
      if ((right = this.right) !== undefined) {
        r.right = right.clone ? right.clone(true) : right;
        r.optor = this.optor;
      }
      return r;
    },
    toString: function () {
      var left = this.left, right = this.right;
      if (typeof left !== "string") left = left.toString();
      if (right) {
        if (typeof right !== "string") right = right.toString();
        return left + this.optor + right;
      }
      return left;
    }
  };
ChangeSS.Exp = Exp;/**
 * Created by 柏然 on 2014/11/1.
 */
function InlineFunc(name, paramList) {
  if (!(this instanceof InlineFunc))return new InlineFunc(name, paramList);
  this.name = name;
  this.param = paramList?(paramList instanceof List? paramList:new List(paramList)):new List();
}
var userDefinedFunc=InlineFunc.Func = {};
InlineFunc.prototype = {
  _type: ChangeSS.TYPE.FUNC,
  get hasVars(){
    return this.param.hasVars;
  },
  getVar: function (array) {
    return this.param.getVar(array);
  },
  resolve: function ($vars, info) {
    var v = this.param.resolve($vars, info), func, name = this.name, ret;
    func = InlineFunc.Func[name];
    if (!(v instanceof List))v = new List(v);
    if (func && v.canResolve($vars)){
      try{
        ret=func.apply(ChangeSS, v.filter(filterComma));
        ret=Length.parse(ret)||ret;
      }
      catch (ex){
        ret=ex.message;
      }
      if(ChangeSS.getType(ret,true)==TYPE.NONE){
        log('function:'+name+' return :'+ret+' with arguments:'+ v.join(' '));
        return ret+'';
      }
      return ret;
      function filterComma(item){
        //fun(a,b)->arguments:[a,',',b] filter comma
        return item !=','
      }
    }
    ret = new InlineFunc(this.name, v);
    return v.hasVars ? ret : ret.toString();
  },
  reduce: function () {
    var p = this.param.resolve();
    this.param = p instanceof List ? p : new List(p);
    return this;
  },
  clone: function () {
    var p = this.param;
    return new InlineFunc(this.name, p.clone ? p.clone() : p);
  },
  canResolve: function ($vars) {
    var p = this.param;
    return typeof p == "string" ? true : p.canResolve($vars);
  },
  toString: function () {
    return this.name + this.paramString;
  },
  get paramString() {
    var v = this.param.toString();
    return '(' + v.replace(/\s+\,\s*/g, ',') + ')';
  }
};
objForEach({
  'sin,cos,tan':{
    args:function(args){return args[0].convert('rad')},
    res:parseFloat
  },
  'asin,acos,atan':{
    res:function(len){
      len.convert(len.unit = 'deg', 'rad');
      return len;
    }
  }
},function(opt,keys){keys.split(',').forEach(function(key){defineMathFunc(opt,key)})});
objForEach(Math,defineMathFunc);
function defineFunction(name,func){
 if(typeof name=="function"){
   func=name;
   name=func.name;
 }
  if(typeof func!=="function"||!name)throw Error('argument not provided');
  return userDefinedFunc[name]=func;
}
function defineMathFunc(opt,name){
  opt=opt||{};
  var MathFun=Math[name],convertArgs=opt.args||mapArg,convertResult=opt.res||useFirstArgUnit;
  if(typeof MathFun==="function"&&!userDefinedFunc[name])
    defineFunction(name,function(){
      var args=convertArgs(arguments);
      if(!(args instanceof Array))args=[args];
      return convertResult(MathFun.apply(Math,args),arguments);
    });
  function mapArg(args){
    return arrMap(args,'num');
  }
  function useFirstArgUnit(item,args){return Length.parse(item,args[0].unit||'')}
}
ChangeSS.InlineFunc = InlineFunc;
ChangeSS.define=defineFunction;


/**
 * Created by 柏子 on 2015/2/5.
 */
function Color(rgb,a){
  if(!(this instanceof Color))return new Color(rgb,a);
  if(typeof rgb==="string"&& rgb[0]=='#')return hex2color(rgb);
  if(rgb instanceof Array){
    this.alpha=a==undefined?1:len2num(a,1);
    this.rgb=rgb.slice(0,3).map(len2num);
  }
}
ChangeSS.Color=Color;
Color.parse=function(hex){
  if(hex instanceof Color)return hex;
  return (typeof hex=="string"&&hex[0]=='#')? hex2color(hex):undefined;
};
function len2num(num,asFloat){
  if(num instanceof Length) return num.unit=='%'? num.num/100:num.num;
  else if(typeof num!=Number) return asFloat? parseFloat(num):parseInt(num);
  return num;
}
function clamp(v, min,max) {
  min=min||0;
  if(max==undefined)max=1;
  return v<min? min:(v>max? max:v);
}
function hex2color(hex){
  var rgb=new Array(3);
  hex=hex.toLowerCase();
  if(/#[a-f0-9]{6}/i.test(hex)){
    for(var off=0;off<3;off++)
      rgb[off]=parseInt(hex.substr(1+off*2,2),16);
  }
  else if(/#[a-f0-9]{3}/i.test(hex)){
    for(var i= 1,char=hex[i];i<4;char=hex[++i])
      rgb[i-1]=parseInt(char+char,16);
  }
  else throw Error('invalid hex color');
  return new Color(rgb,1);
}
function hsla(h,s,l,a){
  if(typeof h=="object"){
    s= h.s;
    l= h.l;
    a= h.alpha;
    h= h.h;
  }
  function hue(h) {
    h = h < 0 ? h + 1 : (h > 1 ? h - 1 : h);
    if      (h * 6 < 1) { return m1 + (m2 - m1) * h * 6; }
    else if (h * 2 < 1) { return m2; }
    else if (h * 3 < 2) { return m1 + (m2 - m1) * (2 / 3 - h) * 6; }
    else                { return m1; }
  }
  h = (h % 360) / 360;
  s = clamp(s);
  l = clamp(l);
  a = a==undefined? 1:clamp(a);
  var m2 = l <= 0.5 ? l * (s + 1) : l + s - l * s;
  var m1 = l * 2 - m2;
  return new Color([hue(h + 1 / 3) * 255,hue(h)* 255,hue(h - 1 / 3) * 255],a);
}
Color.formKeyword=function(key){
  throw Error('do not support');
};
var ColorFuncs;
// from less.js
objForEach(ColorFuncs={
  rgba:function(r,g,b,a){
    if(arguments.length==2)
      return ColorFuncs.alpha(r,g);
    return new Color([r,g,b],a==undefined?1:a);
  },
  transparentize:function(color,a){
    color=Color.parse(color);
    color.alpha=clamp(color.alpha*Length.parse(a).num);
    return color;
  },
  alpha:function(color,a){
    color.alpha=clamp(a);
    return color;
  },
  rgb:function(r,g,b){
    return new Color([r,g,b],1)
  },
  hsl:function(h,s,l){
    return hsla(h,s,l,1)
  },
  hsla:hsla,
  darken: function (color, amount) {
    var hsl = color.toHSL();
    hsl.l = clamp(hsl.l-amount.num/100);
    return hsla(hsl);
  },
  desaturate: function (color, amount) {
    var hsl = color.toHSL();
    hsl.s = clamp(hsl.s-amount.num/100);
    return hsla(hsl);
  },
  saturate: function (color, amount) {
    // filter: saturate(3.2);
    // should be kept as is, so check for color
    if(color instanceof Length)return color;
    var hsl = color.toHSL();
    hsl.s = clamp(hsl.s+ amount.num/ 100);
    return hsla(hsl);
  },
  lighten: function (color, amount) {
    var hsl = color.toHSL();
    hsl.l = clamp(hsl.l+amount.num / 100);
    return hsla(hsl);
  }
},function(func,name){defineFunction(name,func)});
Color.prototype={
  _type:TYPE.KEYWORD,
  toHSL:function(){
   var r = this.rgb[0] / 255,
     g = this.rgb[1] / 255,
     b = this.rgb[2] / 255;
   var max = Math.max(r, g, b), min = Math.min(r, g, b);
   var h, s, l = (max + min) / 2, d = max - min;
   if (max === min) {
     h = s = 0;
   } else {
     s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
     switch (max) {
       case r: h = (g - b) / d + (g < b ? 6 : 0); break;
       case g: h = (b - r) / d + 2;               break;
       case b: h = (r - g) / d + 4;               break;
     }
     h /= 6;
   }
   return { h: h * 360, s: s, l: l, alpha: this.alpha};
 },
  toHex:function(){
    return '#' + this.rgb.map(function (c) {
        c=parseInt(c);
        return (c < 16 ? '0' : '') + c.toString(16);
      }).join('');
  },
  toRGBA:function(){
    return 'rgba('+this.rgb.map(Math.round).join(',')+','+this.alpha+')';
  },
  resolve:function(){
    return new Color(this.rgb,this.alpha);
  },
  reduce:function(){return this},
  get hasVars(){return false},
  get value(){return this.toString()},
  toString:function(){
    return this.alpha==1?this.toHex():this.toRGBA();
  }
};/**
 * Created by 柏然 on 2014/11/1.
 */
function List() {
  if (!(this instanceof List))return List.fromArray(arguments);
  for (var i = 0, len = arguments.length; i < len; i++)
    this.add(arguments[i]);
}
List.addOrMerge = (function () {
  function merge(oriItem, newItem) {
    return newItem;
  }

  function getCompareFunc(keyOrFunc) {
    if (typeof keyOrFunc === 'string')return function (a, b) {
      return a[keyOrFunc] === b[keyOrFunc]
    };
    return keyOrFunc || function (a, b) {
      return a === b;
    }
  }

  return function (arr, obj, keyOrFunc, mergeFunc) {
    if (typeof mergeFunc !== "function")mergeFunc = merge;
    for (var i = 0, len = arr.length, compare = getCompareFunc(keyOrFunc), merged; i < len; i++)
      if (compare(obj, arr[i])) {
        merged = mergeFunc(arr[i], obj);
        if (merged !== undefined)arr[i] = merged;
        return arr;
      }
    arr.push(obj);
    return arr;
  }
})();
List.arrayAdd = function arrayAdd(array, item) {
  var r = true;
  if (item instanceof Array)
    for (var i = 0, len = item.length; i < len; i++) r &= arguments.callee(array, item[i]);
  else {
    if (array.indexOf(item) > -1)return false;
    else array.push(item);
  }
  return r;
};
List.uniquePush = function (a) {
  for (var i = 1, change = false, arr = arguments[1], add = List.arrayAdd; arr; arr = arguments[++i])
    for (var j = 0, len = arr.length; j < len; j++)
      if (add(a, arr[j]))change = true;
  return change;
};
List.fromObject = function (combiner, objArray) {
  if (!(objArray instanceof Array)) objArray = [objArray];
  for (var i = 0, list = new List, obj = objArray[0]; obj; obj = objArray[++i])
    Object.getOwnPropertyNames(obj).forEach(function (key) {
      list.push(key + combiner, obj[key]);
    });
  return list;
};
List.fromArray = function (arry) {
  var l = new List();
  Array.prototype.push.apply(l, arry);
  return l;
};
List.mapBy=(function(){
  function equal(a){
    return a;
  }
  return function(nameOrFunc){
    if(typeof nameOrFunc=="string")
      return function(a){return a[nameOrFunc]};
    else if(typeof nameOrFunc=="function")
      return function(a){return nameOrFunc(a);};
    return equal;
  }
})();
List.groupBy=function(arr,mapFuncOrName){
  var ids=[],mapBy=List.mapBy(mapFuncOrName),groups=[],id,item,index;
  for(var i= 0,len=arr.length;i<len;i++){
    index=ids.indexOf(id=mapBy(item=arr[i]));
    if(index==-1) {
      groups.push([item]);
      ids.push(id);
    }
    else groups[index].push(item);
  }
  return groups;
};
List.prototype = (function (proto) {
  proto.add = function (item) {
    if (this.indexOf(item) > -1)return false;
    this.push(item);
    return true;
  };
  proto.remove = function (item) {
    var i = this.indexOf(item);
    if (i > -1) {
      this.splice(i, 1);
      return true;
    }
    return false;
  };
  proto.canResolve = function ($vars) {
    $vars = $vars || {};
    return this.every(function (obj) {
      return (obj.canResolve) ? obj.canResolve($vars) : true;
    });
  };
  proto.clone = function () {
    return arrayReduce(this, function (list, o) {
      list.push(o.clone ? o.clone(true) : o);
      return list;
    }, new List());
  };
  proto.copy = function (array) {
    if (Array.isArray(array)) {
      this.splice(0, this.length);
      Array.prototype.push.apply(this, array);
    }
    else {
      this.splice(0, this.length, array);
    }
    return this;
  };
  proto.resolve = function ($vars) {
    var list = new List(), last;
    this.forEach(function (v) {
      last = list[list.length - 1];
      v = v.resolve ? v.resolve($vars) : v;
      if (typeof v == "string" && typeof last == "string")
        list[list.length - 1] = last + ' ' + v;
      else list.push(v);
    });
    if (list.length == 1)
      return list[0].resolve ? list[0].resolve($vars) : list[0];
    return list;
  };
  proto.getVar = function (array) {
    array = array || [];
    this.forEach(function (o) {
      if (o.hasVars)o.getVar(array)
    });
    return array;
  };
  Object.defineProperty(proto, 'value', {
    get: function () {
      for (var i = 0, r = [], v, item = this[0]; item; item = this[++i]) {
        v = item.resolve ? item.resolve() : item;
        if (v == undefined) return undefined;
        r.push(v);
      }
      return r.length ? r.join(' ').replace(/[\s\r\n\t\f]+/g, ' ').replace(/\,+/g, ',') : '';
    }
  });
  Object.defineProperty(proto, 'resolved', {
    get: function () {
      return this.every(function (v) {
        return v instanceof Length || typeof v == "string";
      })
    }
  });
  Object.defineProperty(proto, 'hasVars', {
    get: function () {
      return this.some(function (o) {
        return o.hasVars
      })
    }});
  proto.toString = function () {
    return this.join(' ').replace(/[\r\n\s\t\f]+/gi, ' ');
  };
  var arrayReduce = function (array, callback, initialValue) {
    return Array.prototype.reduce.apply(array, [callback, initialValue]);
  };
  proto.reduce = function (callback, initialValue) {
    if (arguments.length == 0)
      return this.copy(this.map(function (obj) {
        return obj.reduce ? obj.reduce() : obj
      }));
    else
      return arrayReduce(this, callback, initialValue);
  };
  proto.toParamList = function () {
    return this.copy(this.reduce().filter(function (c) {
      return c != ',';
    }));
  };
  proto._type = ChangeSS.TYPE.LIST;

  return proto;
})(Object.create([]));
ChangeSS.List = List;/**
 * Created by 柏然 on 2014/11/1.
 */
/**
 * @namespace ChangeSS.Scope
 * @constructor
 */
function Scope() {
  this.staticRules = {};
  this.dynamicRules = {};
  this.defValues = {};
  this.includes = {};
  this.nested = [];
  this.exts = [];
}
(function (def) {
  function trimSelector(selector) {
    return selector.replace(/[\r\n\t\f\s]+/gi, ' ').trim();
  }

  function splitGlobalName(name) {
    return name.split('->').map(trimSelector);
  }

  def.trimSelector = trimSelector;
  def.splitGlobalName = splitGlobalName;
})(Scope);

Scope.prototype = {
  selectors: [''],
  toString: (function () {
    function mapResult(separator) {
      separator = separator || window ? '\n' : '';
      return function (r) {
        return r.selector + '{' + separator + rules(r).join(separator) + '}';
      }
    }
    function rules(ruleObj) {
      return objForEach(ruleObj, function (value,key) {
        this.push(key + ':' + value + ';');
      }, []);
    }
    return function ($vars, separator) {
      return this.resolve($vars).map(mapResult(separator));
    }
  })(),
  get globalName() {
    var sheetName = this.sheetName;
    if (!sheetName)return undefined;
    return (this.symbol || this.selector) + '->' + sheetName;
  },
  setSheetName: function (name) {
    this.sheetName = name;var globalPointer='->'+name;
    objForEach(this.defValues,function(value){
      if(value instanceof Var&&!value.sheetName){
        value.sheetName=name;
      }
    });
    objForEach(this.includes,function(inc){
      objForEach(inc,function(value,key){inc[key.replace(globalPointer,'')]=value;})
    });
    this.nested.forEach(function (s) {
      s.setSheetName(name)
    });
  },
  get paramString() {
    var r = [];
    objForEach(this.defValues, function (value,key) {
      r.push(key + ':' + value);
    });
    return r.length ? '(' + r.join(',') + ')' : '';
  },
  add: function (obj) {
    switch (obj.type.toLowerCase()) {
      case 'rule' :
        return this.addRule(obj.name, obj.value);
      case 'def':
        return this.addDefValues(obj.name, obj.value);
      case 'style':
        return this.addStyle(obj.value);
      case 'include':
        return this.addInclude(obj.name, obj.value);
      case 'ext':
        return this.addExt(obj.name, obj.sheetName);
      case 'mix':
        return this.addMix(obj.value);
    }
    return this;
  },
  addExt: function (selector, sheetName) {
    var names = selector.split('->').map(Scope.trimSelector);
    selector = names[0];
    sheetName = sheetName || names[1];
    if (sheetName)
      selector += '->' + Sheet.trim(sheetName);
    List.arrayAdd(this.exts, selector);
    return this;
  },
  addRule: function (key, value) {
    if (value.hasVars) this.dynamicRules[key] = value;
    else this.staticRules[key] = value.toString();
    return this;
  },
  addDefValues: function (objOrkey, value) {
    var v,i;
    if (typeof objOrkey == "string") {
      if (value instanceof List && value.length == 1)value = value[0];
      else if (value.resolve) v = value.resolve();
      this.defValues[getVarLocalName(objOrkey)] = Length.parse(v) || value;
    }
    else objForEach(objOrkey, function (v,key) {
      this.addDefValues(key, v);
    }, this);
    return this;
  },
  addStyle: function (style) {
    if (style instanceof Scope) {
      this.nested.push(style);
      if (this.sheetName)style.setSheetName(this.sheetName);
    }
    return this;
  },
  addInclude: function (varName, rules) {
    this.includes[varName] = rules;
    return this;
  },
  asContainer:function(){
    this.selectors=[this.selector=''];
    //TODO:&chidselect
    this.nested.forEach(function(s){
      s.selectors= s.selectors.map(function(slt){return '&'+slt})
    });
    return this;
  },
  asMediaQuery:function(mediaQuery,varLike){
    if(mediaQuery){
      this.spec=mediaQuery;
      if(varLike)mediaQuery.symbol=varLike;
    }
   else if(varLike instanceof Var)
     this.spec=varLike;
    return this.asContainer();
  },
  asKeyFrames:function(prefix,name){
    this.selectors=[this.selector=''];
    this.spec=new KeyFrame(name,prefix);
    this.staticRules=this.dynamicRules=this.includes={};
    return this.asContainer();
  },
  canResolve: function ($vars) {
    $vars = this.mixParam($vars || {});
    return Object.getOwnPropertyNames(this.dynamicRules).every(function (key) {
      return this[key].canResolve($vars);
    }, this.dynamicRules);
  },
  validateSelector: (function () {
    function second() {
      return this.selectors;
    }

    function backtrackSelector(parentSelectors) {
      var r, tss;
      if (parentSelectors) {
        tss = this.selectors;
        r = [];
        parentSelectors.forEach(function (ps) {
          tss.forEach(function (ts) {
            r.push(retraceSelector(ts,ps));
          })
        });
        tss = this.selectors;
        this.selectors = r;
      } else tss = this.selectors;
      this.nested.forEach(function (s) {
        s.backtraceSelector(tss);
      });

      this._selector = null;
      this.backtraceSelector = second;
      this.validateSelector = first;
      return this.selectors;
    }
    function replaceSelector(childSlt,parentSlt){
      if(childSlt.indexOf('&')==-1) childSlt=parentSlt+' '+childSlt;
      return childSlt.replace(/\&/g,parentSlt);
    }
    function retraceSelector(childSlt,parentSlt){
      if(childSlt[parentSlt.length]==' ')
        childSlt=childSlt.substring(parentSlt.length+1);
      var rs=childSlt.split(parentSlt),str,ors=[];
      for(var i= 0,len=rs.length;i<len;i++)
        ors.push((str=rs[i])===''?'&':str);
      ors[0].replace(/^&\s+/,'');
      return ors.join('');
    }

    function first(parentSelectors) {
      var r, tss;
      if (parentSelectors) {
        r = [];
        tss = this.selectors;
        parentSelectors.forEach(function (ps) {
          tss.forEach(function (ts) {
            r.push(replaceSelector(ts,ps));
          })
        });
        this.selectors = r;
      }
      else r = this.selectors;
      this.nested.forEach(function (scope) {
        scope.validateSelector(r)
      });
      this._selector = null;
      this.validateSelector = second;
      this.backtraceSelector = backtrackSelector;
      return r;
    }
    return first;
  })(),
  backtraceSelector: function () {
    return this.selectors;
  },
  clone: (function () {
    function onPair(value,key) {
      this[key] = value.clone ? value.clone(true) : value;
    }
    return function () {
      var r = new Scope(),self=this;
      r.validateSelector();
      ['staticRules','dynamicRules','defValues','includes'].forEach(function(key){
        objForEach(self[key],onPair,r[key]);
      });
      r.nested = this.nested.map(function (scope) {
        return scope.clone();
      });
      r.exts = this.exts.slice();
      r.selectors = this.selectors.slice();
      if(self.isMixin){
        r.isMixin=true;
        r.backtraceSelector();
      }
      if(self.spec)r.spec=this.spec;
      return r;
    }
  })(),
  reduce: function () {
    var staticRules = this.staticRules, v;
    objForEach(this.dynamicRules, function (value,key) {
      v = value.value;
      if (v !== undefined) {
        delete this[key];
        staticRules[key] = v;
      }
    });
    return this;
  },
  remove: function (key) {
    if (Exp.isVar(key)) return delete this.defValues[key];
    if (this.staticRules.hasOwnProperty(key))return delete this.staticRules[key];
    if (this.dynamicRules.hasOwnProperty(key))return delete this.dynamicRules[key];
  },
  getVar: function (array) {
    array = array || [];
    objForEach(this.dynamicRules, function ( value,key) {
      value.getVar(array);
    });
    return array;
  },
  /**
   * @function
   * @param  $vars {Object}
   * @return {Array<{selector:string,rules:Object}>}
   * TODO:convert <selector,rules,spec>
   */
  resolve:function($vars){
    return scopeResolveFunc(this,$vars);
  }
};
function getVarLocalName(name){
  var i;
  return (i=name.indexOf('->'))==-1? name:name.substring(0,i).trim();
}
ChangeSS.Scope = Scope;
function Style(selectors, scope) {
  Scope.apply(this);
  if(selectors instanceof MediaQuery){
    this.selector='&';

  }
  else this.selector = selectors;
  this.addScope(scope || new Scope());
}

Style.prototype = (function (scopeProto) {
  var cloneFunc = scopeProto.clone, proto;
  proto = Object.create(scopeProto);
  Object.defineProperty(proto, 'selector', {
    get: function () {
      return this._selector || (this._selector = this.selectors.join(','));
    },
    set: function (list) {
      if (typeof  list == "string") list = list.split(',');
      if (list) {
        if (list.map)
          this.selectors = list.map(Scope.trimSelector);
        else this.selectors = [Scope.trimSelector(list)];
        this._selector = null;
      }
    }
  });

  proto.addScope = function (scope) {
    if (scope instanceof Scope) {
      var self=this;
      ['staticRules','dynamicRules','defValues','includes'].forEach(function(key){
        self[key]=mix(self[key],scope[key]);
      });
      this.exts.push.apply(this.exts, scope.exts);
      ['validateSelector','backtraceSelector'].forEach(function(key){self[key]=scope[key]});
      for (var i = 0, ns = scope.nested, children = this.nested, child = ns[0]; child; child = ns[++i])
        children.push(child);
    }
    return this;
  };
  proto.clone = function () {
    return new Style(this.selectors, cloneFunc.apply(this));
  };
  proto.getStyles = function (id) {
    var s;
    if (id.indexOf(s = this.selector) == 0)
      if (id === s)
        return [this];
      else
        return this.nested.reduce(function (pre, style) {
          pre.push.apply(pre, style.getStyles(id));
          return pre;
        }, []);
    else
      return [];
  };
  return proto;
})(Scope.prototype);/**
 * Created by 柏子 on 2015/1/14.
 */
var keepEmptyResult = false;
/**
 * @name ChangeSS.opt.keepEmptyResult
 * @type boolean
 */
Object.defineProperty(ChangeSS.opt, 'keepEmptyResult', {
  set: function (v) {
    keepEmptyResult = !!v;
  },
  get: function () {
    return keepEmptyResult
  }});
/**
 * @function
 * @param  {ChangeSS.Scope} scope
 * @param  {Object} $vars
 * @return {Array.<{selector:string,rules:Object,spec:Object}>}
 */
function scopeResolveFunc(scope,$vars) {
  if (!$vars)$vars = {};
  else if ($vars.$resolved)
    $vars = mix($vars.$unresolved, $vars.$resolved);
  return preVisit(scope, $vars);
  function preVisit(scope, $assign) {
    var childScope = 0, results = [], scopeStack = [], paramStack = [];
    do {
      if (childScope = getChild(scope, childScope)) {
        scopeStack.push(scope);
        paramStack.push(assignParam(scope, false, paramStack, $assign));
        scope = childScope;
        childScope = 0;
      }
      else {
        results.unshift.apply(results, resolveScope(scope, paramStack, $assign,scope.spec||getSpec(scopeStack)));
        scope = getChild(scopeStack[scopeStack.length - 1], scope);
        if (!scope) {
          childScope = scope = scopeStack.pop();
          paramStack.pop();
        }
      }
    } while (scope);
    return results;
  }
  function getSpec(stack){
    for(var i= stack.length- 1,spec,scope=stack[i];i>=0;scope=stack[--i])
      if(spec=scope.spec)return spec;
  }
}
function sheetResolveFunc(sheet,$vars){
  var $assign = assign(mix(sheet.vars, $vars)), $param = mix($assign.$unresolved, $assign.$resolved),
    ret={},spec,groupKey,sheetName=sheet.name;
  sheet.scopes.forEach(function(scope){
    scopeResolveFunc(scope,$param).forEach(function(result){
      spec=result.spec;
      groupKey='';
      if(spec===undefined)groupKey='*';
      else if(spec instanceof Var)
        spec=(sheetName==spec.sheetName? sheet:ChangeSS.get(spec.sheetName)).medias[spec.symbol];
      if(spec instanceof MediaQuery&&spec.canResolve($assign.$resolved))
        groupKey=spec.toString($assign.$resolved)+'{*}';
      else if(spec instanceof KeyFrame){
        spec.resolve().forEach(function(key){
          addResult(ret,key+'{*}',result);
        });
      }
      if(groupKey)addResult(ret,groupKey,result);
    });
  });
  return ret;
  function addResult(container,key,result){
    var r=container[key];
    if(r==undefined)container[key]=[result];
    else r.push(result);
  }
}


function log() {
  if (ChangeSS.traceLog)
    console.log.apply(console, arguments);
}
/**
 * @name ChangeSS.assign
 * @param {Object}$param
 * @param {Object}[$known]
 * @returns {{$resolved: Object, $unresolved: Object}}
 */
function assign ($param, $known) {
  var con,$unknown = mix($param),tem;
  $known = mix($known);
  do {
    con = false;
    objForEach($unknown, function (value,key) {
      switch (ChangeSS.getType(value)) {
        case TYPE.KEYWORD:
        case TYPE.LENGTH:
          $known[key] = value;
          delete $unknown[key];
          break;
        case TYPE.LIST:
          $unknown[key] = value = value.resolve($known);
          if (!value.hasVars) {
            $known[key] = value.toString();
            delete  $unknown[key];
          } else return;
          break;
        case TYPE.NONE:
          throw 'unknown type';
       case TYPE.VAR:
          tem=value.resolve($known);
          if(!value.equals(tem))$unknown[key]=tem;
          else return;
          break;
        default :
          if (value.canResolve($known))
            $unknown[key] = value.resolve($known);
          else return;
      }
      con = true;
    });
    if (!con)
      con = Object.getOwnPropertyNames($unknown).some(function (key) {
        $unknown[key].canResolve($known)
      });
  } while (con);
  return {$resolved: $known, $unresolved: $unknown};
}
/**
 *
 * @param scope
 * @param paramStack
 * @param $assign
 * @param group
 * @returns Array.<ChangeSS.scopeResolveResult>
 */
function resolveScope(scope, paramStack, $assign,group) {
  var $vars = assignParam(scope, true, paramStack, $assign), ruleObj = mix(scope.staticRules),
    selector = scope.selectors.join(','), r, $resolved = $vars.$resolved;
  if(!selector)return [];
  objForEach(scope.dynamicRules, function ( rule,key) {
    if (!ruleObj.hasOwnProperty(key) && rule.canResolve($resolved))
      ruleObj[key] = rule.resolve($resolved).toString();
    else log('cannot resolve rule ' + key + ':' + rule + ' in:', scope.selector);
  });
  r = [
  /**
   * @name ChangeSS.scopeResolveResult
   * @type {{rules:Object,selector:String}}
   */
    {rules: ruleObj, selector: selector}
  ];
  objForEach(scope.includes, function ( invokeParam,key) {
    var mixin = ChangeSS.get(key, 'mixin') || ChangeSS.error.notExist(key), $param = {};
    objForEach(ChangeSS.assign(invokeParam, $resolved).$resolved, function (value,key) {
      if (invokeParam[key])$param[key] = value;
    });
    resolveInclude(mixin, $param, selector).forEach(function (resObj) {
      if (objNotEmpty(resObj.rules))List.addOrMerge(r, resObj, 'selector', mergeResult);
    });
  });
  return r.filter(function (pair) {
    if(group) pair.spec=group;
    return keepEmptyResult || objNotEmpty(pair.rules);
  });
}

function mergeResult(a, b) {
  if (objNotEmpty(b.rules))
    a.rules = mix(b.rules, a.rules);
  return a;
}

function resolveInclude(mixObj, $vars, selector) {
  mixObj.selectors = selector.split(',');
  mixObj.validateSelector();
  var r = mixObj.resolve($vars);
  mixObj.backtraceSelector();
  return r;
}
function getChild(parent, child) {
  if (parent === child || !parent)return 0;
  return parent.nested[parent.nested.indexOf(child) + 1] || 0;
}
function assignParam(scope, resolve, paramStack, $assign) {
  var lastAssign = paramStack[paramStack.length - 1] || {},
    $mix = mix(lastAssign, scope.defValues, $assign);
  return resolve ? ChangeSS.assign($mix) : $mix;
}
function objNotEmpty(obj) {
  return obj && Object.getOwnPropertyNames(obj).length > 0;
}
/**
 * Created by 柏然 on 2014/11/1.
 */
/**
 * @namespace ChangeSS.Sheet
 * @param {String}name
 * @constructor
 */
function Sheet(name) {
  this.name = name || ChangeSS.opt.defaultSheetName;
  this.scopes = [];
  this.mixins = {};
  this.vars = {};
  this.medias={};
}
Sheet.trim=function(sheetName){
  return sheetName? Scope.trimSelector(sheetName).replace(/(\-\>\s*)/,''):'';
};
Sheet.prototype = (function (proto) {
  proto.add = function (sheetPart, type) {
    var $key, ref;
    type = type || sheetPart.type;
    if (sheetPart instanceof Array)
      sheetPart.forEach(function (p) {
        this.add(p, type);
      }, this);
    else if (type == 'var') {
      ref = sheetPart.value;
      $key = sheetPart.name;
      if ($key.sheetName == this.name)$key.sheetName = '';
      if (Var.isVar(ref) && !ref.sheetName)ref.sheetName = this.name;
      this.vars[$key.toString()] = sheetPart.value;
    }
    else if (type == 'style') {
      ref = sheetPart instanceof Style ? sheetPart : sheetPart.value;
      this.scopes.push(ref);
      ref.setSheetName(this.name);
    }
    else if (type == 'mix') {
      var mixObj = sheetPart.value;
      $key = sheetPart.name;
      if ($key.sheetName == this.name) $key.sheetName = '';
      mixObj.symbol = $key.symbol;
      mixObj.isMixin = true;
      mixObj.setSheetName(this.name);
      this.mixins[$key.toString()] = mixObj;
    }
    else if(type=='media'){
      this.medias[sheetPart.value.symbol=sheetPart.key]=sheetPart.value;
    }
    else if(type=='sheetname')
      this.name=sheetPart.value;
    else throw 'unknown type';
    return this;
  };
  proto.clone=function(){
    var sheet=new Sheet(this.name),self=this,toMap;
    ['vars','mixins','medias'].forEach(function(mapName){
      toMap=sheet[mapName];
      objForEach(self[mapName],function(value,key){
        toMap[key]=value.clone? value.clone():value;
      });
    });
    sheet.scopes=this.scopes.map(function(scope){return scope.clone().validate()});
    return sheet;
  };
  proto.resolve = function ($vars) {
    return sheetResolveFunc(this,$vars);
  };
  proto.toString =(function(){
    var separator='\n';
    function mapScope(scope){
      var rules = [], brc;
      objForEach(scope.rules, function ( value,key) {rules.push(key + ':' + value + ';');});
      brc=rules.length? '{'+separator+'*'+separator+'}':'{*}';
      return scope.selector+brc.replace('*',rules.join(separator));
    }
    function mapGroup(group){
      return group.map(mapScope).join(separator);
    }
    return function($vars){
      var groups=this.resolve($vars),r=[],keyRep='{'+separator+'*'+separator+'}';
      objForEach(groups,function(group,key){
        key=key.replace('{*}',keyRep);
        r.push(key.replace('*',mapGroup(group)))
      });
      return r.join(separator);
    }
  })();
  proto.merge = function (sheet) {
    this.vars = mix(this.vars, sheet.vars);
    this.scopes = this.scopes.concat(sheet.scopes.map(function (s) {
      var sc = s.clone();
      if (s.sheetName)sc.setSheetName(s.sheetName);
      return sc;
    }));
    this.mixins = mix(this.mixins, sheet.mixins);
    this.medias=mix(this.medias,sheet.medias);
    return this;
  };
  proto.validate = function () {
   return sheetLinkInternal(this);
  };
  proto.get = function (id, type) {
    if (type == 'scope' || id[0] != '$') {
      for (var i = 0, scopes = this.scopes, scope = scopes[0]; scope; scope = scopes[++i])
        if (scope.selector == id) return scope;
    } else if (type == 'mixin')
      return this.mixins[id];
    else if (type == 'var')return this.vars[id];
    else if (type=='media')return this.medias[id];
    else return this.mixins[id] || this.vars[id]||this.medias[id];
  };
  proto.getStyles = function (id) {
    return this.scopes.reduce(function (pre, style) {
      pre.push.apply(pre, style.getStyles(id));
      return pre;
    }, []);
  };
  return proto;
})({});/**
 * Created by 柏然 on 2014/11/6.
 */
function sheetLinkInternal(sheet){
  var mediaMap=sheet.medias,spec,mediaSymbol,sheetName=sheet.name;
  sheet.scopes.forEach(function (scope) {
    scope.validateSelector();
    if(spec=setSpecSheetName(scope))
     if(spec instanceof KeyFrame)
        scope.nested=scope.nested.filter(filterKeyFrame);
     else if(spec instanceof MediaQuery&& (mediaSymbol=spec.symbol))
       mediaMap[mediaSymbol]=spec;
  });
  return sheet;
  function filterKeyFrame(r){
    return r.selector&&/^\s*(\d+\%|from|to)\s*$/.test(r.selector);
  }
  function setSpecSheetName(scope){
    var spec=scope.spec;
    if(spec&&!spec.sheetName)spec.sheetName=sheetName;
    scope.nested.forEach(setSpecSheetName);
    return spec;
  }
}
function setGlobalNameIFNot(name, sheetName) {
  if (name.indexOf('->') > -1)return name;
  if (!sheetName)Error('sheetName need');
  return name + '->' + sheetName;
}
ChangeSS.link = (function () {

  function reportCircle(graph) {
    var paths = graph.getPaths(info = []), info;
    if (info.length) ChangeSS.error.cyclicInherit(info.map(function (scope) {
      return '[' + (scope.globalName || scope.selector || scope.symbol) + ']';
    }).join('->'), graph);
    return paths;
  }



  var validateMixCircle, validateExtCircle, linkOtherSheet;
  linkOtherSheet = (function () {
    function filterVar(value,key, proName) {
      var i, gn = key;
      if ((i = key.indexOf('->')) == -1)
        gn += '->' + this.name;
      else {
        ChangeSS.get(key.substr(i + 2))[proName][key.substr(0, i)] = value;
        delete this[proName][key];
      }
      value.globalName = gn;
    }

    function linkInclude(scope, sheetname) {
      if (!scope.sheetName)debugger;
      objForEach(scope.includes, function ( value,key) {
        delete this[key];
        this[setGlobalNameIFNot(key, sheetname)] = value;
      }, scope.includes);
      scope.exts = scope.exts.map(function (name) {
        return setGlobalNameIFNot(name, sheetname);
      });
      scope.nested.forEach(function (c) {
        linkInclude(c, sheetname);
      });
    }

    function linkOtherSheet(sheet) {
      var sheetName = sheet.name;
      objForEach(sheet.vars, filterVar, sheet, 'vars');

      objForEach(sheet.mixins, function ( mixin,key) {
        filterVar.apply(sheet, [ mixin,key, 'mixins']);
        linkInclude(mixin, sheetName);
      });
      sheet.scopes.forEach(function (s) {
        linkInclude(s, sheetName);
      });
    }

    return linkOtherSheet;
  })();
  validateMixCircle = (function () {
    function addMixinExts(scope, mixin) {
      var cs;
      List.arrayAdd(scope.exts, mixin.exts);
      mixin.nested.forEach(function (nestin) {
        cs = new Style(nestin.selectors);
        scope.addStyle(cs);
        cs.resolve = resolveToNull;
        cs.validateSelector(scope.selectors);
        addMixinExts(cs, nestin);
      })
    }

    function resolveToNull() {
      return [];
    }

    function injectIncludeExt(path) {
      for (var i = path.length - 1; i > 0; i--)
        addMixinExts(path[i - 1], path[i]);
    }

    function collectInclude(scope, graph) {
      objForEach(scope.includes, function (v,includeName) {
        var mixObj = ChangeSS.get(includeName, 'mixin') || ChangeSS.error.notExist(includeName);
        graph.addEdge(scope, mixObj);
      });
      scope.nested.forEach(function (child) {
        collectInclude(child, graph);
      });
      return graph;
    }

    function validateMixCircle(sheets, graph) {
      sheets.forEach(function (sheet) {
        sheet.scopes.forEach(function (s) {
          collectInclude(s, graph);
        });
        objForEach(sheet.mixins, function ( mixObj,key) {
          collectInclude(mixObj, graph);
        });
      });
      reportCircle(graph).forEach(injectIncludeExt);
    }

    return validateMixCircle;
  })();
  validateExtCircle = (function () {
    function copyExtToSheet(scope, sheet) {
      var cscope = scope.clone();
      sheet.add({value: cscope, type: 'style'});
      return cscope;
    }

    function handleExtPath(path) {
      for (var i = 0, superScope = path[i], baseScope = path[i + 1]; baseScope; superScope = path[++i], baseScope = path[i + 1]) {
        if (baseScope.sheetName !== superScope.sheetName)
          baseScope = copyExtToSheet(baseScope, ChangeSS.get(superScope.sheetName));
        List.arrayAdd(baseScope.selectors, superScope.selector);
        baseScope._selector = null;
      }
      return path;
    }

    function collectExt(scope, graph) {
      if (!scope.sheetName)Error('no sheetName');
      scope.exts.forEach(function (name) {
       var styles= ChangeSS.get(name, 'styles');
       styles.length? styles.forEach(function (style) {
          graph.addEdge(scope, style);
        }):ChangeSS.error.notExist(name);
      });
      scope.nested.forEach(function (s) {
        collectExt(s, graph);
      });
    }

    function validateExtCircle(sheets, graph) {
      sheets.forEach(function (sheet) {
        sheet.scopes.forEach(function (s) {
          collectExt(s, graph);
        });
      });
      reportCircle(graph).forEach(handleExtPath);
    }

    return validateExtCircle;
  })();
  return function (sheets) {
    var includeGraph, extGraph;
    includeGraph = new Graph();
    extGraph = new Graph();
    sheets.forEach(linkOtherSheet);
    validateMixCircle(sheets, includeGraph);
    validateExtCircle(sheets, extGraph);
    return sheets;
  }
})();
function Graph() {
  if (!(this instanceof Graph))return new Graph();
  this.vertexes = this.createList();
  this.adjustList = this.createList();
}
Graph.prototype = {
  createList: function () {
    return new List()
  },
  addVertex: function (data) {
    for (var i = 0, len = arguments.length; i < len; i++)
      if (this.vertexes.add(arguments[i]))
        this.adjustList.push(this.createList());
    return this;
  },
  removeVertex: function (data) {
    var i = this.vertexIndex(data);
    if (i > -1) {
      this.vertexes.splice(i, 1);
      this.adjustList.slice(i, 1);
    }
    return this;
  },
  hasVertex: function (data) {
    return this.vertexes.indexOf(data) > -1;
  },
  isIsolated: function (data) {
    var i = this.vertexIndex(data);
    return i > -1 ? this.adjustList[i].length == 0 : undefined;
  },
  vertexIndex: function (data) {
    return this.vertexes.indexOf(data);
  },
  addEdge: function (from, to) {
    if (from === to)  ChangeSS.error.cyclicInherit([from, to]);
    this.addVertex(from, to).adjustList[this.vertexIndex(from)].add(this.vertexIndex(to));
    return this;
  },
  addEdges: function (arr) {
    for (var i = 0, len = arr.length; i < len; i += 2)
      this.addEdge(arr[i], arr[i + 1]);
    return this;
  },
  removeEdge: function (from, to, removeIsolated) {
    var arr = this.adjustList[this.vertexIndex((from))];
    if (arr)return arr.remove(this.vertexIndex(to));
    if (removeIsolated) {
      if (this.isIsolated(from))this.removeVertex(from);
      if (this.isIsolated(to))this.removeVertex(to);
    }
    return this;
  },
  adjustVertexes: function (data) {
    var vs = this.vertexes;
    return this.adjustList[this.vertexes.indexOf(data)].map(function (index) {
      return vs[index]
    });
  },
  mergePaths: (function () {
    function isSubSet(set, superSet) {
      var dis, i, setLen;
      if ((dis = superSet.length - (setLen = set.length)) <= 0)return false;
      for (i = 0; i < setLen; i++)
        if (set[i] !== superSet[dis + i])return false;
      return true;
    }

    return function (paths) {
      var con = 1, len;
      paths.sort(function (a, b) {
        return a.length > b.length
      });
      while (con) {
        con = 0;
        len = paths.length;
        paths = paths.filter(function (p, i) {
          for (i; i < len; i++)
            if (isSubSet(p, paths[i]))
              return !(con = 1);
          return true;
        });
      }
      return paths;
    }
  })(),
  convertPathsData: function (paths) {
    var vs = this.vertexes;
    return paths.map(function (arr) {
      return arr.map(function (i) {
        return vs[i];
      })
    });
  },
  detectCircle: (function () {
    var all = [];

    function deepVisit(preArray, dir, circle) {
      var from = dir.from;
      if (circle)return circle;
      if (preArray.indexOf(from) > -1) {
        preArray.push(from);
        return preArray;
      }
      preArray.push(from);
      for (var i = 0, to = dir.to, len = to.length; i < len && !circle; i++)
        circle = deepVisit(preArray.slice(), all[to[i]]);
      return circle;
    }

    return function (dirs) {
      all = dirs.reduce(function (pre, dir) {
        pre[dir.from] = dir;
        return pre;
      }, []);
      for (var d = 0, dir = dirs[0], circle; dir && !circle; dir = dirs[++d])
        circle = deepVisit([], dir, circle);
      return circle;
    }
  })(),
  getPaths: function (circleCollector) {
    var adsl = this.adjustList, vers = this.vertexes, dirs = vers.map(function (data, i) {
        return {from: i, to: adsl[i].slice()};
      }),
      endPaths = new Array(dirs.length), con = 1, temPaths = new Array(dirs.length), cir;
    for (var i = 0, len = dirs.length; i < len; i++)
      temPaths[i] = [];
    while (con) {
      con = false;
      dirs = dirs.filter(function (dir) {
        var from = dir.from, temPath;
        if (dir.to.length == 0) {
          temPath = temPaths[from];
          if (!temPath) return false;
          endPaths[from] = temPath.length ? temPath.map(function (p) {
            return [from].concat(p);
          }) : [
            [from]
          ];
          con = !(temPaths[from] = 0);
          return false;
        }
        else
          dir.to = dir.to.filter(function (toIndex) {
            var toEndPaths = endPaths[toIndex];
            if (toEndPaths) {
              temPaths[from] = temPaths[from].concat(toEndPaths);
              return !(con = true);
            }
            return true;
          });
        return true;
      });
    }
    if (dirs.length) {
      cir = this.detectCircle(dirs).map(function (i) {
        return vers[i];
      });
      if (circleCollector instanceof Array) circleCollector.push.apply(circleCollector, cir);
      else throw Error('circle detected:' + cir.join('->'));
    }
    return this.convertPathsData(this.mergePaths(endPaths.reduce(function (pre, arr) {
      pre.push.apply(pre, arr);
      return pre;
    }, [])));
  }
};
ChangeSS.Graph = Graph;
ChangeSS.error.cyclicInherit = function (pathInfo, graph) {
  throw Error('Cyclic inherits detected:' + pathInfo);
};/**
 * Created by 柏然 on 2014/11/21.
 */
function MediaQuery(mType, condition) {
  if (!(this instanceof MediaQuery))return new MediaQuery(mType, condition);
  this.mediaTypes = [mType || ''];
  this.conditions = [
    {}
  ];
  this.groupPrefix='@media';
  this.add(condition);
}
MediaQuery.prototype = {
  add: function (pair, mediaType) {
    var i;
    if (mediaType == undefined) i = 0;
    else if ((i = this.mediaTypes.indexOf(mediaType)) == -1)return this;
    if (pair && pair.key)
      this.conditions[i][pair.key] = pair.value;
    return this;
  },
  merge: function (mq) {
    this.mediaTypes = this.mediaTypes.concat(mq.mediaTypes);
    this.conditions = this.conditions.concat(mq.conditions);
    return this;
  },
  apply: function (item) {
    if (item instanceof Array)
      item.forEach(function (i) {
        this.apply(i)
      }, this);
    else if (item instanceof Style) {
      item.media = this;
    }
    return this;
  },
  reduce: function () {
    this.conditions.forEach(function (con) {
      objForEach(con, function ( v,key) {
        if(v==undefined)con[key]=v;
        else {
          if (v.resolve)v = v.resolve();
          con[key] = v.hasVars ? v : v.toString();
        }
      });
    });
    this.variables = null;
    return this;
  },
  clone: (function () {
    function cloneObj(obj) {
      var o = {};
      objForEach(obj, function ( value,key) {
        o[key] = value.clone ? value.clone() : value
      });
      return o;
    }
    return function () {
      var m = new MediaQuery();
      m.mediaTypes = this.mediaTypes.slice();
      m.conditions = this.conditions.map(cloneObj);
      m.groupPrefix=this.groupPrefix;
      return m;
    }
  })(),
  toString: (function () {
    var MEDIA_AND=' and ';
    function resolveMedia(conMap, $known) {
      var r = [];
      objForEach(conMap, function ( value,key) {
        if(value==undefined) r.push('('+key+')');
        else{
          if (value.hasVars)value = value.resolve($known);
          r.push('(' + key + ':' + value + ')');
        }
      });
      return r.join(MEDIA_AND);
    }
    return function ($known) {
      var cons = this.conditions;
      return this.groupPrefix+' '+ this.mediaTypes.map(function (m_type, i) {
        var mcon=resolveMedia(cons[i], $known);
        if(m_type)
          return mcon? m_type+MEDIA_AND+mcon:m_type;
        return mcon;
      }).join(',');
    }
  })(),
  canResolve: function ($vars) {
    return !this.hasVars || this.variables.every(function (v) {
      return v.canResolve($vars)
    });
  },
  get hasVars() {
    var vs = this.variables || (this.variables = this.getVar());
    return vs.length > 0;
  },
  getVar: function (array) {
    array = array || [];
    this.conditions.forEach(function (condition) {
      objForEach(condition, function (v) {
        if (v instanceof Var) List.arrayAdd(array, v);
        else if (v.getVar) v.getVar(array);
      });
    });
    return array;
  }
};
MediaQuery.prototype.resolve = function ($vars) {
  return this.canResolve($vars) ? this.toString($vars) : this.clone();
};
ChangeSS.MediaQuery = MediaQuery;
function KeyFrame(name,prefix){
  this.name=name;
  this.prefix=prefix;
}
KeyFrame.prototype=(function(){
  var vendorPrefixes=['o','moz','ms','webkit',''].map(mapPrefix),normalizePrefixes=['@keyframes'];
  function mapPrefix(pre){
    if(pre)pre='-'+pre+'-';
    return '@'+pre+'keyframes';
  }
  function resolveKeyFrame(animationName,prefix){
    var r;
    if(prefix===normalizePrefixes[0]){
      if(ChangeSS.opt.addKeyFramesVendorPrefix) r=vendorPrefixes;
      else r= ChangeSS.opt.preferKeyFramesVendorPrefix? [mapPrefix(ChangeSS.opt.vendorPrefix)]:normalizePrefixes;
    }
    else r= [prefix];
    return r.map(function(pre){return pre+' '+animationName});
  }
  return {
    toString:function(){
      return this.prefix+' '+this.name;
    },
    resolve:function(){
      return resolveKeyFrame(this.name,this.prefix);
    }/*,
    getAnimations:function(){
      var prefix,name=this.name,r;
      if((prefix=this.prefix)===normalizePrefixes[0]){
        if(ChangeSS.opt.addKeyFramesVendorPrefix) r=vendorPrefixes;
        else r= ChangeSS.opt.preferKeyFramesVendorPrefix? [mapPrefix(ChangeSS.opt.vendorPrefix)]:normalizePrefixes;
      }
      else r= [prefix];
      return r.map(function(pre){return pre+' '+name});
    }*/
  }
})();/* generated by jison-lex 0.3.4 */
var lexer = (function(){
var lexer = ({

EOF:1,

parseError:function parseError(str, hash) {
        if (this.yy.parser) {
            this.yy.parser.parseError(str, hash);
        } else {
            throw new Error(str);
        }
    },

// resets the lexer, sets new input
setInput:function (input, yy) {
        this.yy = yy || this.yy || {};
        this._input = input;
        this._more = this._backtrack = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = '';
        this.conditionStack = ['INITIAL'];
        this.yylloc = {
            first_line: 1,
            first_column: 0,
            last_line: 1,
            last_column: 0
        };
        if (this.options.ranges) {
            this.yylloc.range = [0,0];
        }
        this.offset = 0;
        return this;
    },

// consumes and returns one char from the input
input:function () {
        var ch = this._input[0];
        this.yytext += ch;
        this.yyleng++;
        this.offset++;
        this.match += ch;
        this.matched += ch;
        var lines = ch.match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno++;
            this.yylloc.last_line++;
        } else {
            this.yylloc.last_column++;
        }
        if (this.options.ranges) {
            this.yylloc.range[1]++;
        }

        this._input = this._input.slice(1);
        return ch;
    },

// unshifts one char (or a string) into the input
unput:function (ch) {
        var len = ch.length;
        var lines = ch.split(/(?:\r\n?|\n)/g);

        this._input = ch + this._input;
        this.yytext = this.yytext.substr(0, this.yytext.length - len);
        //this.yyleng -= len;
        this.offset -= len;
        var oldLines = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1);
        this.matched = this.matched.substr(0, this.matched.length - 1);

        if (lines.length - 1) {
            this.yylineno -= lines.length - 1;
        }
        var r = this.yylloc.range;

        this.yylloc = {
            first_line: this.yylloc.first_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.first_column,
            last_column: lines ?
                (lines.length === oldLines.length ? this.yylloc.first_column : 0)
                 + oldLines[oldLines.length - lines.length].length - lines[0].length :
              this.yylloc.first_column - len
        };

        if (this.options.ranges) {
            this.yylloc.range = [r[0], r[0] + this.yyleng - len];
        }
        this.yyleng = this.yytext.length;
        return this;
    },

// When called from action, caches matched text and appends it on next action
more:function () {
        this._more = true;
        return this;
    },

// When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
reject:function () {
        if (this.options.backtrack_lexer) {
            this._backtrack = true;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });

        }
        return this;
    },

// retain first n characters of the match
less:function (n) {
        this.unput(this.match.slice(n));
    },

// displays already matched input, i.e. for error messages
pastInput:function () {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
    },

// displays upcoming input, i.e. for error messages
upcomingInput:function () {
        var next = this.match;
        if (next.length < 20) {
            next += this._input.substr(0, 20-next.length);
        }
        return (next.substr(0,20) + (next.length > 20 ? '...' : '')).replace(/\n/g, "");
    },

// displays the character position where the lexing error occurred, i.e. for error messages
showPosition:function () {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c + "^";
    },

// test the lexed token: return FALSE when not a match, otherwise return token
test_match:function (match, indexed_rule) {
        var token,
            lines,
            backup;

        if (this.options.backtrack_lexer) {
            // save context
            backup = {
                yylineno: this.yylineno,
                yylloc: {
                    first_line: this.yylloc.first_line,
                    last_line: this.last_line,
                    first_column: this.yylloc.first_column,
                    last_column: this.yylloc.last_column
                },
                yytext: this.yytext,
                match: this.match,
                matches: this.matches,
                matched: this.matched,
                yyleng: this.yyleng,
                offset: this.offset,
                _more: this._more,
                _input: this._input,
                yy: this.yy,
                conditionStack: this.conditionStack.slice(0),
                done: this.done
            };
            if (this.options.ranges) {
                backup.yylloc.range = this.yylloc.range.slice(0);
            }
        }

        lines = match[0].match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno += lines.length;
        }
        this.yylloc = {
            first_line: this.yylloc.last_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.last_column,
            last_column: lines ?
                         lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length :
                         this.yylloc.last_column + match[0].length
        };
        this.yytext += match[0];
        this.match += match[0];
        this.matches = match;
        this.yyleng = this.yytext.length;
        if (this.options.ranges) {
            this.yylloc.range = [this.offset, this.offset += this.yyleng];
        }
        this._more = false;
        this._backtrack = false;
        this._input = this._input.slice(match[0].length);
        this.matched += match[0];
        token = this.performAction.call(this, this.yy, this, indexed_rule, this.conditionStack[this.conditionStack.length - 1]);
        if (this.done && this._input) {
            this.done = false;
        }
        if (token) {
            return token;
        } else if (this._backtrack) {
            // recover context
            for (var k in backup) {
                this[k] = backup[k];
            }
            return false; // rule action called reject() implying the next rule should be tested instead.
        }
        return false;
    },

// return next match in input
next:function () {
        if (this.done) {
            return this.EOF;
        }
        if (!this._input) {
            this.done = true;
        }

        var token,
            match,
            tempMatch,
            index;
        if (!this._more) {
            this.yytext = '';
            this.match = '';
        }
        var rules = this._currentRules();
        for (var i = 0; i < rules.length; i++) {
            tempMatch = this._input.match(this.rules[rules[i]]);
            if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                match = tempMatch;
                index = i;
                if (this.options.backtrack_lexer) {
                    token = this.test_match(tempMatch, rules[i]);
                    if (token !== false) {
                        return token;
                    } else if (this._backtrack) {
                        match = false;
                        continue; // rule action called reject() implying a rule MISmatch.
                    } else {
                        // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
                        return false;
                    }
                } else if (!this.options.flex) {
                    break;
                }
            }
        }
        if (match) {
            token = this.test_match(match, rules[index]);
            if (token !== false) {
                return token;
            }
            // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
            return false;
        }
        if (this._input === "") {
            return this.EOF;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. Unrecognized text.\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });
        }
    },

// return next match that has a token
lex:function lex() {
        var r = this.next();
        if (r) {
            return r;
        } else {
            return this.lex();
        }
    },

// activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
begin:function begin(condition) {
        this.conditionStack.push(condition);
    },

// pop the previously active lexer condition state off the condition stack
popState:function popState() {
        var n = this.conditionStack.length - 1;
        if (n > 0) {
            return this.conditionStack.pop();
        } else {
            return this.conditionStack[0];
        }
    },

// produce the lexer rule set which is active for the currently active lexer condition state
_currentRules:function _currentRules() {
        if (this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1]) {
            return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
        } else {
            return this.conditions["INITIAL"].rules;
        }
    },

// return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
topState:function topState(n) {
        n = this.conditionStack.length - 1 - Math.abs(n || 0);
        if (n >= 0) {
            return this.conditionStack[n];
        } else {
            return "INITIAL";
        }
    },

// alias for begin(condition)
pushState:function pushState(condition) {
        this.begin(condition);
    },

// return the number of states currently on the stack
stateStackSize:function stateStackSize() {
        return this.conditionStack.length;
    },
options: {},
performAction: function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {
var YYSTATE=YY_START;
switch($avoiding_name_collisions) {
case 0:/* ignore*/;
break;
case 1:return 47;
break;
case 2:return 37;
break;
case 3:this.begin("EXP");return 40;
break;
case 4:return 27;
break;
case 5:this.begin("EXP");return 49;
break;
case 6:this.begin('EXT');return 30;
break;
case 7:return 41;
break;
case 8:return 5;
break;
case 9:this.popState();return 31;
break;
case 10:return 4;
break;
case 11:return 31;
break;
case 12:/* ignore*/;
break;
case 13:this.begin("EXP");return 22;
break;
case 14:return 24;
break;
case 15:this.popState();return 34;
break;
case 16:this.popState();return 35;
break;
case 17:return 13;
break;
case 18:return 14;
break;
case 19:return 22;
break;
case 20:return 20;
break;
case 21:return 44;
break;
case 22:return 39;
break;
case 23:return 7;
break;
case 24:popUntil(this,'INITIAL');return 24;
break;
case 25:return "STRING";
break;
case 26:return "URL";
break;
case 27:return 15;
break;
case 28:return 9;
break;
case 29:return 10;
break;
case 30:return 11;
break;
case 31:return 12;
break;
case 32:return 20;
break;
case 33:return 20;
break;
case 34:return 20;
break;
case 35:return "EOF";
break;
}
},
rules: [/^(?:(\/\*[\s\S]*?\*\/|\/\/.*?[\r\n]))/,/^(?:@treatas\b)/,/^(?:@mixin\b)/,/^(?:@media\b)/,/^(?:@include\b)/,/^(?:@sheetname\b)/,/^(?:@extend\b)/,/^(?:@(-(webkit|moz|ms|o)-)?keyframes\b)/,/^(?:->([\s\r\n\t\f])*(-?(([_a-zA-Z]|([\200-\377])|((\\{h}{1,6}(\r\n|[ \t\r\n\f])?)|\\[ -~\200-\377]))(-?(([_a-zA-Z]|([\200-\377])|((\\{h}{1,6}(\r\n|[ \t\r\n\f])?)|\\[ -~\200-\377]))|[0-9]))*)))/,/^(?:((([_a-zA-Z]|([\200-\377])|((\\{h}{1,6}(\r\n|[ \t\r\n\f])?)|\\[ -~\200-\377]))|[0-9])|[\.#\*\>\+\-\&]|\d+%)(((([_a-zA-Z]|([\200-\377])|((\\{h}{1,6}(\r\n|[ \t\r\n\f])?)|\\[ -~\200-\377]))|[0-9])|[\.#\*\>\+\-\&]|\d+%)|[\s>\+\~@\^\$\|\=\[\]\'\"\(\)\r\n\t\f])*?(?=[\;\}\{]))/,/^(?:(\$([_a-zA-Z]|([\200-\377])|((\\{h}{1,6}(\r\n|[ \t\r\n\f])?)|\\[ -~\200-\377]))((-([_a-zA-Z]|([\200-\377])|((\\{h}{1,6}(\r\n|[ \t\r\n\f])?)|\\[ -~\200-\377])))|(([_a-zA-Z]|([\200-\377])|((\\{h}{1,6}(\r\n|[ \t\r\n\f])?)|\\[ -~\200-\377]))|[0-9]))*))/,/^(?:(((([_a-zA-Z]|([\200-\377])|((\\{h}{1,6}(\r\n|[ \t\r\n\f])?)|\\[ -~\200-\377]))|[0-9])|[\.#\*\>\+\-\&]|\d+%)((((([_a-zA-Z]|([\200-\377])|((\\{h}{1,6}(\r\n|[ \t\r\n\f])?)|\\[ -~\200-\377]))|[0-9])|[\.#\*\>\+\-\&]|\d+%)|[\s>\+\~@\^\$\|\=\[\]\'\"\(\)\r\n\t\f])|(::|:(?![^\{]*?[\)\;]([\s\r\n\t\f])*[\}\;])))*?(?=((\(([\s\r\n\t\f])*(\$([_a-zA-Z]|([\200-\377])|((\\{h}{1,6}(\r\n|[ \t\r\n\f])?)|\\[ -~\200-\377]))((-([_a-zA-Z]|([\200-\377])|((\\{h}{1,6}(\r\n|[ \t\r\n\f])?)|\\[ -~\200-\377])))|(([_a-zA-Z]|([\200-\377])|((\\{h}{1,6}(\r\n|[ \t\r\n\f])?)|\\[ -~\200-\377]))|[0-9]))*)([\s\r\n\t\f])*:)|\{|,))))/,/^(?:([\s\r\n\t\f]))/,/^(?::)/,/^(?:;+)/,/^(?:\{)/,/^(?:\})/,/^(?:\()/,/^(?:\))/,/^(?::)/,/^(?:,)/,/^(?:and\b)/,/^(?:,)/,/^(?:((\d+(\.\d+)?)|(\.\d+))(%|\w+\b)?)/,/^(?:;+)/,/^(?:@?("|')[\s\S]*?(\1))/,/^(?:(url\(.*?\)|url\((("|')[\s\S]*?(\1))\)))/,/^(?:(-?(([_a-zA-Z]|([\200-\377])|((\\{h}{1,6}(\r\n|[ \t\r\n\f])?)|\\[ -~\200-\377]))(-?(([_a-zA-Z]|([\200-\377])|((\\{h}{1,6}(\r\n|[ \t\r\n\f])?)|\\[ -~\200-\377]))|[0-9]))*))(?=\())/,/^(?:\+)/,/^(?:-)/,/^(?:\*)/,/^(?:\/)/,/^(?:(#([0-9a-fA-F])+)|(!\w+))/,/^(?:(not|only)([\s\r\n\t\f])*(-?(([_a-zA-Z]|([\200-\377])|((\\{h}{1,6}(\r\n|[ \t\r\n\f])?)|\\[ -~\200-\377]))(-?(([_a-zA-Z]|([\200-\377])|((\\{h}{1,6}(\r\n|[ \t\r\n\f])?)|\\[ -~\200-\377]))|[0-9]))*)))/,/^(?:(-?(([_a-zA-Z]|([\200-\377])|((\\{h}{1,6}(\r\n|[ \t\r\n\f])?)|\\[ -~\200-\377]))(-?(([_a-zA-Z]|([\200-\377])|((\\{h}{1,6}(\r\n|[ \t\r\n\f])?)|\\[ -~\200-\377]))|[0-9]))*)))/,/^(?:$)/],
conditions: {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,10,11,12,13,14,15,16,17,18,19,22,23,34,35],"inclusive":true},"EXP":{"rules":[0,1,2,3,4,5,6,7,8,10,12,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35],"inclusive":true},"EXT":{"rules":[0,1,2,3,4,5,6,7,8,9,10,12,15,16,17,18,19,22,23,34,35],"inclusive":true}}
});
return lexer;
})();
parser.lexer = lexer;
function Parser () {
  this.yy = {};
}
Parser.prototype = parser;parser.Parser = Parser;
return new Parser;
})();


