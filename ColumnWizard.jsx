/*==============================================================================
  File Name: ColumnWizard.jsx
  Title: Column Wizard
  Version: 1.0.0
  Author: Phize
  Author URI: http://phize.net
              http://dxd8.com

                                                       Copyright(C) 2008 Phize
==============================================================================*/



#target photoshop

app.bringToFront();



// Column Wizard
function columnWizard() {
    // ========== SETTING BEGIN ==========
    // en: You may change these value for default setting.
    // ja: デフォルト設定を変えることができます

    var option = {
        columnMax: 3,  // en: maximum number of column ('1' or above)
                       // ja: カラムの最大数 ('1'以上)

        columnNum: 2,  // en: default number of column  ja: デフォルトのカラム数

        bgColor: 'CCCCCC',  // en: background color  ja: 背景色

        drawShape: true,  // en: draw shapes of column(s)? ('true' or 'false')
                          // ja: カラムのシェイプを作成する? ('true' または 'false')

        // en: default setting for column  ja: カラムのデフォルト設定
        column: [
            // en: canvas  ja: 全体
            { marginTop: 128, marginRight: 128, marginBottom: 128, marginLeft: 128 },

            // en: columns (repeat for 'columnMax')
            // ja: カラム ('columnMax'の数だけ繰り返してください)
            // en: column 1  ja: カラム 1
            { marginTop: 0, marginLeft: 0, marginRight: 0, marginBottom: 0, width: 544, height: 800, bgColor: '00A0E9' },

            // en: column 2  ja: カラム 2
            { marginTop: 0, marginLeft: 0, marginRight: 0, marginBottom: 0, width: 256, height: 800, bgColor: '8FC31F' },

            // en: column 3  ja: カラム 3
            { marginTop: 0, marginLeft: 0, marginRight: 0, marginBottom: 0, width: 180, height: 800, bgColor: 'EA68A2' }

            // en: column ...
            //     remove '//' of line below and repeat, if you increase the value of 'columnMax'.
            // ja: カラム ...
            //     'columnMax'の数を増やした場合は、下の行の'//'を削除して繰り返してください。
            // , { marginTop: 0, marginRight: 0, marginBottom: 0, marginLeft: 0, width: 256, height: 800, bgColor: 'FFFFFF' }
        ]
    };

    // en: locale  ja: ロケール
    //   English: 'en'
    //   日本語 : 'ja'

    // en: remove '//' of line below, if you'd like to set locale manually.
    // ja: ロケールを手動で設定したい場合は、下の行の'//'を削除してください。
    // $.locale = 'en';

    // ========== SETTING END ==========



    // text for localize
    var text = {
        title: { en: 'Column Wizard', ja: 'カラムウィザード' },
        option: { en: 'Option', ja: 'オプション' },
        bgColor: { en: 'Background color', ja: '背景色' },
        drawShape: { en: 'Draw shapes of column(s)', ja: 'カラムのシェイプを作る' },
        columnNumber: { en: 'Column number', ja: 'カラム数' },
        canvas: { en: 'Canvas', ja: '全体' },
        column: { en: 'Column', ja: 'カラム' },
        marginTop: { en: 'Margin top', ja: '上余白' },
        marginRight: { en: 'Margin right', ja: '右余白' },
        marginBottom: { en: 'Margin bottom', ja: '下余白' },
        marginLeft: { en: 'Margin left', ja: '左余白' },
        width: { en: 'Width', ja: '幅' },
        height: { en: 'Height', ja: '高さ' },
        ok: { en: 'OK', ja: 'OK' },
        cancel: { en: 'Cancel', ja: 'キャンセル' },
        newDoc: { en: 'New Document', ja: '新規ドキュメント' }
    };



    // panelColumn
    // column panel
    function panelColumn() {
        this.initialize();
    }

    panelColumn.prototype = {
        initialize: function() {
            this.id = 0;
        },
        create: function(dlg, prop) {
            prop = prop || {};

            this.dlg = dlg;
            this.id = prop.id || this.id;
            this.name = prop.name || localize(text.column) + ' ' + this.id;
            this.marginTop = prop.marginTop || 0;
            this.marginRight = prop.marginRight || 0;
            this.marginBottom = prop.marginBottom || 0;
            this.marginLeft = prop.marginLeft || 0;
            this.width = prop.width || 256;
            this.height = prop.height || 800;
            this.bgColor = prop.bgColor || 'FFFFFF';

            this.dlg.pColumn[this.id] = this.dlg.add('panel', undefined, this.name);
            this.dlg.pColumn[this.id].orientation = 'column';
            this.dlg.pColumn[this.id].alignChildren = 'right';
            this.dlg.pColumn[this.id].gMarginTop = this.dlg.pColumn[this.id].add('group');
            this.dlg.pColumn[this.id].gMarginLeft = this.dlg.pColumn[this.id].add('group');
            this.dlg.pColumn[this.id].gMarginRight = this.dlg.pColumn[this.id].add('group');
            this.dlg.pColumn[this.id].gMarginBottom = this.dlg.pColumn[this.id].add('group');
            this.dlg.pColumn[this.id].gWidth = this.dlg.pColumn[this.id].add('group');
            this.dlg.pColumn[this.id].gHeight = this.dlg.pColumn[this.id].add('group');
            this.dlg.pColumn[this.id].gBgColor = this.dlg.pColumn[this.id].add('group');

            this.dlg.pColumn[this.id].gMarginTop.orientation = 'row';
            this.dlg.pColumn[this.id].gMarginTop.lTop = this.dlg.pColumn[this.id].gMarginTop.add('statictext', undefined, localize(text.marginTop) + ':');
            this.dlg.pColumn[this.id].gMarginTop.marginTop = this.dlg.pColumn[this.id].gMarginTop.add('edittext', undefined, this.marginTop);
            this.dlg.pColumn[this.id].gMarginTop.marginTop.preferredSize = [ 32, 20 ];
            this.dlg.pColumn[this.id].gMarginTop.lTopUnits = this.dlg.pColumn[this.id].gMarginTop.add('statictext', undefined, 'px');

            this.dlg.pColumn[this.id].gMarginLeft.orientation = 'row';
            this.dlg.pColumn[this.id].gMarginLeft.lLeft = this.dlg.pColumn[this.id].gMarginLeft.add('statictext', undefined, localize(text.marginLeft) + ':');
            this.dlg.pColumn[this.id].gMarginLeft.marginLeft = this.dlg.pColumn[this.id].gMarginLeft.add('edittext', undefined, this.marginLeft);
            this.dlg.pColumn[this.id].gMarginLeft.marginLeft.preferredSize = [ 32, 20 ];
            this.dlg.pColumn[this.id].gMarginLeft.lLeftUnits = this.dlg.pColumn[this.id].gMarginLeft.add('statictext', undefined, 'px');

            this.dlg.pColumn[this.id].gMarginRight.orientation = 'row';
            this.dlg.pColumn[this.id].gMarginRight.lRight = this.dlg.pColumn[this.id].gMarginRight.add('statictext', undefined, localize(text.marginRight) + ':');
            this.dlg.pColumn[this.id].gMarginRight.marginRight = this.dlg.pColumn[this.id].gMarginRight.add('edittext', undefined, this.marginRight);
            this.dlg.pColumn[this.id].gMarginRight.marginRight.preferredSize = [ 32, 20 ];
            this.dlg.pColumn[this.id].gMarginRight.lRightUnits = this.dlg.pColumn[this.id].gMarginRight.add('statictext', undefined, 'px');

            this.dlg.pColumn[this.id].gMarginBottom.orientation = 'row';
            this.dlg.pColumn[this.id].gMarginBottom.lBottom = this.dlg.pColumn[this.id].gMarginBottom.add('statictext', undefined, localize(text.marginBottom) + ':');
            this.dlg.pColumn[this.id].gMarginBottom.marginBottom = this.dlg.pColumn[this.id].gMarginBottom.add('edittext', undefined, this.marginBottom);
            this.dlg.pColumn[this.id].gMarginBottom.marginBottom.preferredSize = [ 32, 20 ];
            this.dlg.pColumn[this.id].gMarginBottom.lBottomUnits = this.dlg.pColumn[this.id].gMarginBottom.add('statictext', undefined, 'px');

            this.dlg.pColumn[this.id].gWidth.orientation = 'row';
            this.dlg.pColumn[this.id].gWidth.lWidth = this.dlg.pColumn[this.id].gWidth.add('statictext', undefined, localize(text.width) + ':');
            this.dlg.pColumn[this.id].gWidth.width = this.dlg.pColumn[this.id].gWidth.add('edittext', undefined, this.width);
            this.dlg.pColumn[this.id].gWidth.width.preferredSize = [ 32, 20 ];
            this.dlg.pColumn[this.id].gWidth.lWidthUnits = this.dlg.pColumn[this.id].gWidth.add('statictext', undefined, 'px');

            this.dlg.pColumn[this.id].gHeight.orientation = 'row';
            this.dlg.pColumn[this.id].gHeight.lHeight = this.dlg.pColumn[this.id].gHeight.add('statictext', undefined, localize(text.height) + ':');
            this.dlg.pColumn[this.id].gHeight.height = this.dlg.pColumn[this.id].gHeight.add('edittext', undefined, this.height);
            this.dlg.pColumn[this.id].gHeight.height.preferredSize = [ 32, 20 ];
            this.dlg.pColumn[this.id].gHeight.lheightUnits = this.dlg.pColumn[this.id].gHeight.add('statictext', undefined, 'px');

            this.dlg.pColumn[this.id].gBgColor.orientation = 'row';
            this.dlg.pColumn[this.id].gBgColor.lBgColor = this.dlg.pColumn[this.id].gBgColor.add('statictext', undefined, localize(text.bgColor) + ':');
            this.dlg.pColumn[this.id].gBgColor.bgColor = this.dlg.pColumn[this.id].gBgColor.add('edittext', undefined, this.bgColor);
            this.dlg.pColumn[this.id].gBgColor.bgColor.preferredSize = [ 56, 20 ];
        },
        getMarginTop: function() {
            return parseInt(this.dlg.pColumn[this.id].gMarginTop.marginTop.text);
        },
        getMarginRight: function() {
            return parseInt(this.dlg.pColumn[this.id].gMarginRight.marginRight.text);
        },
        getMarginBottom: function() {
            return parseInt(this.dlg.pColumn[this.id].gMarginBottom.marginBottom.text);
        },
        getMarginLeft: function() {
            return parseInt(this.dlg.pColumn[this.id].gMarginLeft.marginLeft.text);
        },
        getWidth: function() {
            return parseInt(this.dlg.pColumn[this.id].gWidth.width.text);
        },
        getHeight: function() {
            return parseInt(this.dlg.pColumn[this.id].gHeight.height.text);
        },
        getBgColor: function() {
            return this.dlg.pColumn[this.id].gBgColor.bgColor.text;
        },
        disableWidth: function() {
            this.dlg.pColumn[this.id].gWidth.width.enabled = false;
        },
        disableHeight: function() {
            this.dlg.pColumn[this.id].gHeight.height.enabled = false;
        },
        disableBgColor: function() {
            this.dlg.pColumn[this.id].gBgColor.bgColor.enabled = false;
        },
        enableBgColor: function() {
            this.dlg.pColumn[this.id].gBgColor.bgColor.enabled = true;
        },
        disableEdit: function() {
            this.dlg.pColumn[this.id].gMarginTop.marginTop.enabled = false;
            this.dlg.pColumn[this.id].gMarginRight.marginRight.enabled = false;
            this.dlg.pColumn[this.id].gMarginBottom.marginBottom.enabled = false;
            this.dlg.pColumn[this.id].gMarginLeft.marginLeft.enabled = false;
            this.dlg.pColumn[this.id].gWidth.width.enabled = false;
            this.dlg.pColumn[this.id].gHeight.height.enabled = false;
        },
        enableEdit: function() {
            this.dlg.pColumn[this.id].gMarginTop.marginTop.enabled = true;
            this.dlg.pColumn[this.id].gMarginRight.marginRight.enabled = true;
            this.dlg.pColumn[this.id].gMarginBottom.marginBottom.enabled = true;
            this.dlg.pColumn[this.id].gMarginLeft.marginLeft.enabled = true;
            this.dlg.pColumn[this.id].gWidth.width.enabled = true;
            this.dlg.pColumn[this.id].gHeight.height.enabled = true;
        }
    }



    // panelColumnMaster extend panelColumn
    // master column panel
    function panelColumnMaster(dlg, prop) {
        if (panelColumn.prototype.masterId != undefined) {
            return new panelColumnChild(dlg, prop);
        }

        panelColumn.prototype.column = panelColumn.prototype.column || 0;
        panelColumn.prototype.masterId = panelColumn.prototype.column;

        prop = prop || {};
        prop.id = panelColumn.prototype.column;
        prop.name = prop.name || localize(text.canvas);

        panelColumn.call(this);
        this.create(dlg, prop);
        this.disableWidth();
        this.disableHeight();

        panelColumn.prototype.column ++;


        var _self = this;

        // calculate size
        panelColumn.prototype.calculateSize = function() {
            var w = 0;

            for (var i = 0; i < _self.dlg.pColumn.length; i ++) {
                if (i != panelColumn.prototype.masterId && _self.dlg.pColumn[i].gWidth.width.enabled) {
                    w += parseInt(_self.dlg.pColumn[i].gWidth.width.text) + parseInt(_self.dlg.pColumn[i].gMarginLeft.marginLeft.text) + parseInt(_self.dlg.pColumn[i].gMarginRight.marginRight.text);
                }
            }

            _self.dlg.pColumn[panelColumn.prototype.masterId].gWidth.width.text = w;

            var h = 0;

            for (i = 0; i < _self.dlg.pColumn.length; i ++) {
                if (i != panelColumn.prototype.masterId && _self.dlg.pColumn[i].gHeight.height.enabled) {
                    h = Math.max(h, parseInt(_self.dlg.pColumn[i].gHeight.height.text) + parseInt(_self.dlg.pColumn[i].gMarginTop.marginTop.text) + parseInt(_self.dlg.pColumn[i].gMarginBottom.marginBottom.text));
                }
            }

            _self.dlg.pColumn[panelColumn.prototype.masterId].gHeight.height.text = h;
        }
    }

    panelColumnMaster.prototype = new panelColumn();
    panelColumnMaster.constructor = panelColumnMaster;



    // panelColumnChild extend panelColumn
    // child column panel
    function panelColumnChild(dlg, prop) {
        panelColumn.prototype.column = panelColumn.prototype.column || 0;

        prop = prop || {};

        prop.id = panelColumn.prototype.column;

        panelColumn.call(this);
        this.create(dlg, prop);

        panelColumn.prototype.column ++;

        // changed edit text
        this.dlg.pColumn[this.id].gMarginTop.marginTop.onChanging =
        this.dlg.pColumn[this.id].gMarginRight.marginRight.onChanging =
        this.dlg.pColumn[this.id].gMarginBottom.marginBottom.onChanging =
        this.dlg.pColumn[this.id].gMarginLeft.marginLeft.onChanging =
        this.dlg.pColumn[this.id].gWidth.width.onChanging =
        this.dlg.pColumn[this.id].gHeight.height.onChanging = function() {
            panelColumn.prototype.calculateSize();
        }
    }

    panelColumnChild.prototype = new panelColumn();
    panelColumnChild.constructor = panelColumnChild;



    function toRGB(code) {
        var dec = parseInt('0x' + code);
        var r = (dec & 0xff0000) >>> 0x000010;
        var g = (dec & 0x00ff00) >>> 0x000008;
        var b = (dec & 0x0000ff);

        return { r: r, g: g, b: b };
    }



    // add guide
    function addGuide(offset, orientation) {
        var id1 = charIDToTypeID('Mk  ');
        var desc1 = new ActionDescriptor();
        var id2 = charIDToTypeID('Nw  ');
        var desc2 = new ActionDescriptor();
        var id3 = charIDToTypeID('Pstn');
        var id4 = charIDToTypeID('#Rlt');
        desc2.putUnitDouble(id3, id4, offset);
        var id5 = charIDToTypeID('Ornt');
        var id6 = charIDToTypeID('Ornt');
        var id7 = charIDToTypeID(orientation);
        desc2.putEnumerated(id5, id6, id7);
        var id8 = charIDToTypeID('Gd  ');
        desc1.putObject(id2, id8, desc2);
        executeAction(id1, desc1, DialogModes.NO);
    }



    // draw shape
    function drawShape(sx, sy, ex, ey, color, name) {
        var rgb = toRGB(color);

        var id1 = charIDToTypeID('Mk  ');
        var desc1 = new ActionDescriptor();
        var id2 = charIDToTypeID('null');
        var ref1 = new ActionReference();
        var id3 = stringIDToTypeID('contentLayer');
        ref1.putClass(id3);
        desc1.putReference(id2, ref1);
        var id4 = charIDToTypeID('Usng');
        var desc2 = new ActionDescriptor();
        var id5 = charIDToTypeID('Type');
        var id6 = stringIDToTypeID('solidColorLayer');
        desc2.putClass(id5, id6);
        var id7 = charIDToTypeID('Shp ');
        var desc3 = new ActionDescriptor();
        var id8 = charIDToTypeID('Top ');
        var id9 = charIDToTypeID('#Pxl');
        desc3.putUnitDouble(id8, id9, sy);
        var id10 = charIDToTypeID('Left');
        var id11 = charIDToTypeID('#Pxl');
        desc3.putUnitDouble(id10, id11, sx);
        var id12 = charIDToTypeID('Btom');
        var id13 = charIDToTypeID('#Pxl');
        desc3.putUnitDouble(id12, id13, ey);
        var id14 = charIDToTypeID('Rght');
        var id15 = charIDToTypeID('#Pxl');
        desc3.putUnitDouble(id14, id15, ex);
        var id16 = charIDToTypeID('Rctn');
        desc2.putObject(id7, id16, desc3);
        var id17 = stringIDToTypeID('contentLayer');
        desc1.putObject(id4, id17, desc2);
        executeAction(id1, desc1, DialogModes.NO);

        var id18 = charIDToTypeID('setd');
        var desc4 = new ActionDescriptor();
        var id19 = charIDToTypeID('null');
        var ref2 = new ActionReference();
        var id20 = stringIDToTypeID('contentLayer');
        var id21 = charIDToTypeID('Ordn');
        var id22 = charIDToTypeID('Trgt');
        ref2.putEnumerated(id20, id21, id22);
        desc4.putReference(id19, ref2);
        var id23 = charIDToTypeID('T   ');
        var desc5 = new ActionDescriptor();
        var id24 = charIDToTypeID('Clr ');
        var desc6 = new ActionDescriptor();
        var id25 = charIDToTypeID('Rd  ');
        desc6.putDouble(id25, rgb.r);
        var id26 = charIDToTypeID('Grn ');
        desc6.putDouble(id26, rgb.g);
        var id27 = charIDToTypeID('Bl  ');
        desc6.putDouble(id27, rgb.b);
        var id28 = charIDToTypeID('RGBC');
        desc5.putObject(id24, id28, desc6);
        var id29 = stringIDToTypeID('solidColorLayer');
        desc4.putObject(id23, id29, desc5);
        executeAction(id18, desc4, DialogModes.NO);

        var id30 = charIDToTypeID('setd');
        var desc7 = new ActionDescriptor();
        var id31 = charIDToTypeID('null');
        var ref3 = new ActionReference();
        var id32 = charIDToTypeID('Lyr ');
        var id33 = charIDToTypeID('Ordn');
        var id34 = charIDToTypeID('Trgt');
        ref3.putEnumerated(id32, id33, id34);
        desc7.putReference(id31, ref3);
        var id35 = charIDToTypeID('T   ');
        var desc8 = new ActionDescriptor();
        var id36 = charIDToTypeID('Nm  ');
        desc8.putString(id36, name);
        var id37 = charIDToTypeID('Lyr ');
        desc7.putObject(id35, id37, desc8);
        executeAction(id30, desc7, DialogModes.NO);
    }



    // changed column
    function changeColumn() {
        if (dlg.pOption.gColumn.column.text != '' && dlg.pOption.gColumn.column.text < 1) {
            dlg.pOption.gColumn.column.text = 1;
        }

        if (dlg.pOption.gColumn.column.text > option.columnMax) {
            dlg.pOption.gColumn.column.text = option.columnMax;
        }

        for (var i = 0; i < dlg.pOption.gColumn.column.text; i ++) {
            c[i].enableEdit();
        }

        for (var i = dlg.pOption.gColumn.column.text; i < c.length; i ++) {
            c[i].disableEdit();
        }

        cM.calculateSize();
    }


    // check option
    if (option.columnMax < 1) {
        option.columnMax = 1;
    }

    if (option.columnNum < 1) {
        option.columnNum = 1;
    }

    if (option.columnNum > option.columnMax) {
        option.columnNum = option.columnMax;
    }

    // dialog setting
    var dlg = new Window('dialog', localize(text.title));
    dlg.orientation = 'column';

    // option panel
    dlg.pOption = dlg.add('panel', undefined, localize(text.option));
    dlg.pOption.orientation = 'row';
    dlg.pOption.alignment = 'fill';
    dlg.pOption.alignChildren = 'center';
    dlg.pOption.gColumn = dlg.pOption.add('group');
    dlg.pOption.gColumn.orientation = 'row';
    dlg.pOption.gColumn.lColumn = dlg.pOption.gColumn.add('statictext', undefined, localize(text.columnNumber) + ':');
    dlg.pOption.gColumn.column = dlg.pOption.gColumn.add('edittext', undefined, option.columnNum);
    dlg.pOption.gColumn.column.preferredSize = [ 24, 20 ];
    dlg.pOption.gBgColor = dlg.pOption.add('group');
    dlg.pOption.gBgColor.orientation = 'row';
    dlg.pOption.gBgColor.lBgColor = dlg.pOption.gBgColor.add('statictext', undefined, localize(text.bgColor) + ':');
    dlg.pOption.gBgColor.bgColor = dlg.pOption.gBgColor.add('edittext', undefined, option.bgColor);
    dlg.pOption.gBgColor.bgColor.preferredSize = [ 56, 20 ];
    dlg.pOption.gDrawShape = dlg.pOption.add('group');
    dlg.pOption.gDrawShape.orientation = 'row';
    dlg.pOption.gDrawShape.drawShape = dlg.pOption.gDrawShape.add('checkbox', undefined, localize(text.drawShape));
    dlg.pOption.gDrawShape.drawShape.value = option.drawShape;

    // changed draw shape option
    var changeDrawShape =
    dlg.pOption.gDrawShape.drawShape.onClick = function() {
        if (dlg.pOption.gDrawShape.drawShape.value) {
            cM.enableBgColor();
            for (var i = 0; i < dlg.pOption.gColumn.column.text; i ++) {
                 c[i].enableBgColor();
            }
        } else {
            cM.disableBgColor();
            for (i = 0; i < dlg.pOption.gColumn.column.text; i ++) {
                 c[i].disableBgColor();
            }
        }

        for (i = dlg.pOption.gColumn.column.text; i < c.length; i ++) {
             c[i].disableBgColor();
        }
    }

    // changed column
    var changeColumn =
    dlg.pOption.gColumn.column.onChanging = function() {
        if (dlg.pOption.gColumn.column.text != '' && dlg.pOption.gColumn.column.text < 1) {
            dlg.pOption.gColumn.column.text = 1;
        }

        if (dlg.pOption.gColumn.column.text > option.columnMax) {
            dlg.pOption.gColumn.column.text = option.columnMax;
        }

        for (var i = 0; i < dlg.pOption.gColumn.column.text; i ++) {
            c[i].enableEdit();
        }

        for (i = dlg.pOption.gColumn.column.text; i < c.length; i ++) {
            c[i].disableEdit();
        }

        cM.calculateSize();
        changeDrawShape();
    }

    // columns group
    dlg.gColumns = dlg.add('group');
    dlg.gColumns.orientation = 'row';

    dlg.gColumns.pColumn = [];

    var prop = option.column[0] || {};
    var cM = new panelColumnMaster(dlg.gColumns, prop);
    var c = [];

    for (var i = 0; i < option.columnMax; i ++) {
        prop = option.column[i + 1] || {};
        prop.name = localize(text.column) + ' ' + (i + 1);

        c[i] = new panelColumnChild(dlg.gColumns, prop);
    }

    cM.calculateSize();
    changeColumn();

    // button group
    dlg.gButton = dlg.add('group');
    dlg.gButton.orientation = 'row';
    dlg.gButton.bOk = dlg.gButton.add('button', undefined, localize(text.ok), { name: 'ok' });
    dlg.gButton.bCancel = dlg.gButton.add('button', undefined, localize(text.cancel), { name: 'cancel' });

    // add guide
    dlg.gButton.bOk.onClick = function() {
        var cM_mt = cM.getMarginTop();
        var cM_mr = cM.getMarginRight();
        var cM_mb = cM.getMarginBottom();
        var cM_ml = cM.getMarginLeft();
        var cM_w = cM.getWidth();
        var cM_h = cM.getHeight();

        var doc_w = cM_ml + cM_w + cM_mr;
        var doc_h = cM_mt + cM_h + cM_mb;

        var _backgroundColor = app.backgroundColor;
        app.backgroundColor.rgb.hexValue = dlg.pOption.gBgColor.bgColor.text;
        var doc = app.documents.add(doc_w, doc_h, 72.0, localize(text.newDoc), NewDocumentMode.RGB, DocumentFill.BACKGROUNDCOLOR);
        app.backgroundColor = _backgroundColor;

        // add guide
        addGuide(cM_ml, 'Vrtc');
        addGuide(cM_ml + cM_w, 'Vrtc');
        addGuide(cM_ml + cM_w + cM_mr, 'Vrtc');
        addGuide(cM_mt, 'Hrzn');
        addGuide(cM_mt + cM_h, 'Hrzn');
        addGuide(cM_mt + cM_h + cM_mb, 'Hrzn');

        if (dlg.pOption.gDrawShape.drawShape.value) {
            drawShape(cM_ml, cM_mt, cM_ml + cM_w, cM_mt + cM_h, cM.getBgColor(), localize(text.canvas));
        }

        var w = cM_ml;
        var sx, sy, ex, ey;

        for (var i = 0; i < dlg.pOption.gColumn.column.text; i ++) {
            var h = cM_mt;

            sx = w += c[i].getMarginLeft();
            addGuide(w, 'Vrtc');
            sy = h += c[i].getMarginTop();
            addGuide(h, 'Hrzn');
            ex = w += c[i].getWidth();
            addGuide(w, 'Vrtc');
            ey = h += c[i].getHeight();
            addGuide(h, 'Hrzn');
            w += c[i].getMarginRight();
            addGuide(w, 'Vrtc');
            h += c[i].getMarginBottom();
            addGuide(h, 'Hrzn');

            if (dlg.pOption.gDrawShape.drawShape.value) {
                drawShape(sx, sy, ex, ey, c[i].getBgColor(), localize(text.column) + ' ' + (i + 1));
            }
        }

        dlg.close();
    }

    // canceled
    dlg.gButton.bCancel.onClick = function() {
        dlg.close();
    }

    dlg.center();
    dlg.show();
}



// store default setting
var _rulerUnits = app.preferences.rulerUnits;
var _typeUnits = app.preferences.typeUnits;
var _displayDialogs = app.displayDialogs;



// set setting
app.preferences.rulerUnits = Units.PIXELS;
app.preferences.typeUnits = TypeUnits.PIXELS;
app.displayDialogs = DialogModes.NO;



columnWizard();



// restore default setting
app.preferences.rulerUnits = _rulerUnits;
app.preferences.typeUnits = _typeUnits;
app.displayDialogs = _displayDialogs;
