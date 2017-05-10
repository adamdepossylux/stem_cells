clf
xo=1;
xmax=5;
N=100;
h=(xmax-x0)/(N-1);
y1=zeros(1,N);
y1(1)=2;
y=2*exp(atan(x)-%pi/4)

for i=1:N-1
    y1(i+1)=y1(i)+h*((y1(i)/(1+x(i)*x(i))));
end


y2=zeros(1,N);
y2(1)=2;
for i=1:N-1
    y22=y2(i)+h*((y2(i)/(1+x(i)*x(i))));
    y2(i+1)=y2(i)+(h/2)*((y2(i)/(1+x(i)*x(i)))+(y22/(1+x(i+1)*x(i+1))));
    e(i+1)=abs(y2(i+1)-y(i+1));
end

function [y]=f(x,y) //plutot t et 
    y=y/(1+x^2);
endfunction


y0=2
x=linspace(xo,xmax,N);

y3=ode(y0,xo,x,f)


plot2d(x,y)
plot2d(x,y1,5)
plot2d(x,y2,4)
plot2d(x,y3,3)
plot2d(x,e,2)
legend(['analytique','Euler explicite','Euler modifiée','ode','ecart'],4)
