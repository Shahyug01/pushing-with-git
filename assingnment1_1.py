ret=False
while ret==False:
 print("Enter Operation you want to perform:")
 operation=input("+,-,/,*,**,%,//,x:")
 if operation=='x': 
    print("Exited successfully!")
    break
 a=float(input("Enter first number:"))
 b=float(input("Enter second number:"))
 
 if operation=='+':
    result=a+b
    print(result)
 elif operation=='-':
    result=a-b
    print(result)
 elif operation=='*':
    result=a*b
    print(result)
 elif operation=="/":
    result=a/b
    print(result)
 elif operation=='**':
     result=a**b
     print(result)
 elif operation=='%':
     result=a%b
     print(result)
 elif operation=='//':
     result=a//b
     print(result)
else:
   print("Operations completed")