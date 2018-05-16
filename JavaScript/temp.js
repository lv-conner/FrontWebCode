var str = "Po,Qty850,AckDate850,Qty855,AckDate855,Qty860,AckDate860,DeliveryNumber,Qty856,AckDate856,Qty846,AckDate846,Qty810,AckDate810";
var title = "PO,数量,日期,确认数量,确认日期,修改数量,修改日期,发货单号,发货数量,发货日期,收货数量,收货日期,发票数量,发票日期";
var titleArr = title.split(",");
var arr = str.split(",");
var colArr = [];
for (var p = 0; p < arr.length; p++) {
    console.log(arr[p])
    colArr.push({ "title": titleArr[p], "filed": arr[p], "align": "center" });
}

console.log(JSON.stringify(colArr));

//PO,数量,日期,PO,数量,确认日期, PO,修改数量,日期,发货单号,发货数量,日期,发货单号,数量,日期,发货单号,数量,日期

// Po,Qty,AckDate,AckQty,AckDate855,ChangeQty,ChangeDate,DeliveryNumber,Qty856,AckDate856,Qty846,AckDate846,Qty810,AckDate810