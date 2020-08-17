function regexTest(){	
  this.fullnameRegex = /^[a-zA-Z ]+$/;///^([a-z]{1,15})\.([a-z]{1,15})/i;	
  this.usernameRegex = /^[a-z0-9]+$/i;	
  this.phoneRegex = /^(\+234|0)[7-9]{1}(0|1)\d{8}$/;	
  this.emailRegex = /^\S+@\S+\.\S/;
  this.addressRegex = /^[a-zA-Z0-9 ]+$/i;	
  this.dateRegex = /^(([0-2][0-9])|(3[0-1]))[\-]((0[1-9])|(1[1-2]))[\-][0-9]{2,4}$/;	
  this.validateFullname = function(full_name){		
    if(this.fullnameRegex.test(full_name)){			
      console.log(''+ full_name +' is a valid Name');		
      
    }else{			
      console.log(''+full_name+' invaild Name');		
    }	
  }	
  this.validateUsername = function(username){		
    if(this.usernameRegex.test(username)){			
      console.log(''+ username +' is a valid username');		
    }else{			
      console.log(''+username+' invalid username');	
    }	
  }	
  this.validatePhone = function(phone){		
    if(this.phoneRegex.test(phone)){			
      console.log(''+ phone +' is a valid Phone');		
    }else{			
      console.log(phone+ ' invalid Name');		
      
    }	
    
  }	
  this.validateEmail = function(email){		
    if(this.emailRegex.test(email)){			
      console.log(''+ email +' is a valid Email');		
      
    }else{			
      console.log(email+ ' invalid Email');		
      
    }	
    
  }	
  this.validateAddress = function(address){		
    if(this.addressRegex.test(address)){			
      console.log(''+ address +' is a valid Address');		
      
    }else{			
      console.log(''+address+' invaild Address');		
      
    }	
    
  }	
  this.validateDate = function(dateStr){		
    if(this.dateRegex.test(dateStr)){			
      console.log(''+ dateStr +' is a valid Date Format');
    }else{			
      console.log(''+dateStr+' invaild Date Formart');	
    }	
    
  }
  
}
let validator = new regexTest();
console.log('*******Test for full name*******');
validator.validateFullname('paul');
validator.validateFullname('chidubem owoh');
validator.validateFullname('chidubem owoh02');
console.log('\n*******Test for username*******');
validator.validateUsername('');
validator.validateUsername('paulex');
validator.validateUsername('paulex01');
console.log('\n*******Test for phone number*******');
validator.validatePhone('020033');
validator.validatePhone('09030353673');
validator.validatePhone('+2348139353954');
validator.validatePhone('+23481393539549');
console.log('\n*******Test for email*******');
validator.validateEmail('');
validator.validateEmail('chidubempaul91@gmail.com');
validator.validateEmail('chidubem.owoh.g20@gmail.com');
validator.validateEmail('chidubemalex91@gmail');
console.log('\n*******Test for address*******');
validator.validateAddress('');
validator.validateAddress('No 12 nnamdi azikiwe rd awka');
validator.validateAddress('100km way new york city USA');
console.log('\n*******Test for date with format 10-12-2020*******');
validator.validateDate('02/020/2040');
validator.validateDate('06-06-1998');
validator.validateDate('09-12-20');