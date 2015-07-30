function sdc_set_table(){
   	this.row=new Object();
   	this.to_String = function(){
	 	return JSON.stringify(this.row);
	};
	this.set_field = function(field_name,value){
		this.row[field_name]=value;
	};
}
