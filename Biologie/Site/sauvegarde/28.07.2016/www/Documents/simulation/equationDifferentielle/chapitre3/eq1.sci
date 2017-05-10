clf
x0=1;
xmax=5;
N=100;
x=linspace(x0,xmax,N);
h=(xmax-x0)/(N-1);
y1=zeros(1,N);
y1(1)=2;
y=2*exp(atan(x)-%pi/4)
plot2d(x,y);
for i=1:N-1
    y1(i+1)=y1(i)+h*((y1(i)/(1+x(i)*x(i))));
end
plot2d(x,y1,5)

y2=zeros(1,N);
y2(1)=2;
for i=1:N-1
    y22=y2(i)+h*((y2(i)/(1+x(i)*x(i))));
    y2(i+1)=y2(i)+(h/2)*((y2(i)/(1+x(i)*x(i)))+(y22/(1+x(i+1)*x(i+1))));
end
plot2d(x,y2,4)
