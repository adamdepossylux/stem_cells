clf
N=100000;
x=rand(1,N);
y=rand(1,N);
a=min(x,y);
b=max(x,y)-a;
c=1-max(x,y);
I=find(a+b>c & a+c>b & b+c>a);
r=length(I)/N
plot(x(I),y(I),".")
