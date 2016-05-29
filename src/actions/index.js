import React, { Component } from 'react';
import files from 'fs';
import parse from 'csv-parse';

const apiKey = 'VJ6cBdw9ajZYok4srDmb';
let csvData = [];
const symbols = () => {
	fs.createReadStream(req.file.path)
	    .pipe(parse({delimiter: ':'}))
	    .on('data', function(csvrow) {
	        console.log(csvrow);
	        //do something with csvrow
	        csvData.push(csvrow);        
	    })
	    .on('end',function() {
	      //do something wiht csvData
	      console.log(csvData);
	    });

};

export default apiKey;
export default csvData;


