(function (global) {
	var mapArray;
	
	if (!global.UAM) {
		global.UAM = {};
	}
	
    global.UAM.library = []; 
	
    global.UAM.addCategory = function (newCategoryName) {
		global.UAM.library.push({
		categoryName: newCategoryName,
		books: []
     		});
    };
	
    global.UAM.removeCategory = function (categoryObject) {
		for (i = 0; i < UAM.library.length; i++) { 
			if (UAM.library[i].categoryName == categoryObject){
				delete global.UAM.library[i];
			}
		}	
    };
	
    global.UAM.addBookToCategory = function(categoryObject, title1, count1) {
		for (i = 0; i < UAM.library.length; i++) { 
			if (UAM.library[i].categoryName == categoryObject){		
				global.UAM.library[i].books.push({
				title: title1,
				count: count1
				});		
			}
		}

    };

    global.UAM.removeBookFromCategory = function(categoryObject, bookObject) {
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


    global.UAM.getCategoryByName = function(categoryName1) {
		for (i = 0; i < UAM.library.length; i++) { 
			if (UAM.library[i].categoryName == categoryName1){
				return global.UAM.library[i];
			}
		}
    };

    global.UAM.getBookByTitle = function(title1) {
		for (i = 0; i < UAM.library.length; i++) { 
			for (j = 0; j < UAM.library[i].books.length; j++) { 
				if (UAM.library[i].books[j].title == title1){
					return global.UAM.library[i].books[j];
				}
			}
		}
    };

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
		var array = [];
		var count = 0;
		for (i = 0; i < UAM.library.length; i++) { 
			for (j = 0; j < UAM.library[i].books.length; j++) { 
				array[count] =  global.UAM.library[i].books[j];
				count++;
			}	
		}
		return array;
    };
}(window));
