(function (global) {
	var mapArray;

	if (!global.UAM) {
		global.UAM = {};
	}
    
    global.UAM.library = []; 

    // BELOW SAMPLES SHOW STRUCTURE OF CATEGORY OBJECT AND STUCTURE OF BOOKS OBJECT INSIDE CATEGORY 
    //   
    // global.UAM.library.push({
    //     categoryName: 'Kryminał',
    //     books: []
    // });
    
    // global.UAM.library[0].books.push({
    //     title: 'Pan Tadeusz',
    //     count: 3
    // });
    
    //////////////////////////////////////////////////////////////////////////////////////

    // newCategoryName: String
    global.UAM.addCategory = function (newCategoryName) {
		global.UAM.library.push({
		categoryName: newCategoryName,
		books: []
     });
    };

    // categoryObject: Object
    global.UAM.removeCategory = function (categoryObject) {
			for (i = 0; i < UAM.library.length; i++) { 
					if (UAM.library[i].categoryName == categoryObject){
						delete global.UAM.library[i];
					}
			}
			
    };

    // categoryObject: Object
    // title: String
    // count: Number 
    global.UAM.addBookToCategory = function(categoryObject, title1, count1) {
        // !!!
        // function should return new book object
		
		for (i = 0; i < UAM.library.length; i++) { 
			if (UAM.library[i].categoryName == categoryObject){		
				global.UAM.library[i].books.push({
				title: title1,
				count: count1
				});		
			}
		}

    };

    // categoryObject: Object
    // bookObject: Object
    global.UAM.removeBookFromCategory = function(categoryObject, bookObject) {
        // !!!
		for (i = 0; i < UAM.library.length; i++) { 
					if (UAM.library[i].categoryName == categoryObject){
						for (j = 0; j < UAM.library[i].books.length; j++) { 
							if (UAM.library[i].books[j].title == bookObject){
								delete global.UAM.library[i].books[j];
							}
						}
					}
			}
		
    };

    // categoryName: String
    global.UAM.getCategoryByName = function(categoryName1) {
        // !!!
        // function should return category object
		for (i = 0; i < UAM.library.length; i++) { 
					if (UAM.library[i].categoryName == categoryName1){
						return global.UAM.library[i];
					}
			}
		
		
    };

    // title: String
    global.UAM.getBookByTitle = function(title1) {
        // !!!
        // function should return book object
		for (i = 0; i < UAM.library.length; i++) { 
						for (j = 0; j < UAM.library[i].books.length; j++) { 
							if (UAM.library[i].books[j].title == title1){
								return global.UAM.library[i].books[j];
							}
						}
					
			}
    };

    // bookObject: Object
    global.UAM.returnBook = function(bookObject) {
        for (i = 0; i < UAM.library.length; i++) { 
						for (j = 0; j < UAM.library[i].books.length; j++) { 
							if (UAM.library[i].books[j].title == bookObject){
							   global.UAM.library[i].books[j].count++;
							}
						}
					
			}
    };
    
    global.UAM.getBorrowedBooks = function() {
        // !!!
        // Nie jestem do końca pewny czy chodzi o to, że ktoś "pożyczył" książkę.
		
		 for (i = 0; i < UAM.library.length; i++) { 
						for (j = 0; j < UAM.library[i].books.length; j++) { 
							if (UAM.library[i].books[j].title == bookObject){
							   global.UAM.library[i].books[j].count--;
							}
						}
					
			}
    };

}(window));

/*

Przykład użycia:

var newAircraft1 = addAircraft('SP-XY1');
var newAircraft2 = addAircraft('SP-XY2');

addWorkToAircraft(newAircraft1, 'serviceXY1a', 110);
addWorkToAircraft(newAircraft1, 'serviceXY1b', 130);
reduceTimeToExecute(newAircraft1, 20);

var sxy2a = addWorkToAircraft(newAircraft2, 'serviceXY2a', 130);
var sxy2b = addWorkToAircraft(newAircraft2, 'serviceXY2b', 160);
reduceTimeToExecute(newAircraft2, 20);

getAircraftsForRepairs(100); // [ newAircraft1 ]

removeAircraft(newAircraft1);

getAircraftsForRepairs(100); // []

reduceTimeToExecute(newAircraft2, 20);

getAircraftsForRepairs(100); // [ newAircraft2 ]

*/
