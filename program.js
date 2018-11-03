var fs=require('fs');

const sum = (s) => {
  
  
 
  
  
  
  
  
  	if (s == null || s.length == 0)

		{

			return 0;

		} 
    
 var x=0,sum=0
  for (var index=0;index<s.length;index++)
    {
      
     
	  var c=s.charAt(index)

			if (c >= 'a' && c <= 'f'&&flag==='-x') {
				switch (c) {

				case 'a':

				{
					x = 10
					break

				}

				case 'b': {
					x = 11
					break
				}
				case 'c': {
					x = 12;
					break;

				}
				case 'd': {
					x = 13;
					break;

				}
				case 'e': {
					x = 14;
					break;

				}

				case 'f': {
					x = 14;
					break;

				}

				}//switch
			}//if
			
			
			else if(c>='1'&&c<='9')
			{
				x= c-'0';
			}
			sum+=x;
		}//for
		return sum;

	}
      
      
     
const flag = process.argv[2]

const input = process.argv[3]
   if(flag=='-f')
   {
	 var contents=fs.readFileSync(input, 'utf8')
	console.log(sum(contents)) 
	   
	   
	   
   }  

else
{
	console.log(sum(input)) 
	
}

