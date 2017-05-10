N=100000;
clf
x=rand(1,N);
u=1+4*rand(1,N);
mu=sum(u)/N
mu1=mean(u)

clf
x=-2+4*rand(1,N);
y=-2+4*rand(1,N);
plot(x,u,".")

clf
x=-2+4*rand(1,N);
y=-2+4*rand(1,N);

I=find((x.^2+y.^2)<=1);
plot(x(I),y(I),".")
 //find retourne le vecteur des indices i pour lesquels x(i) est "vrai"


clf
x=-2+4*rand(1,N);
y=-2+4*rand(1,N);
I=find((x.^2+y.^2)<=1); 
pi=(length(I)/N)*16

clf
x=rand(1,N);
y=rand(1,N);
a=min(x,y);
b=max(x,y)-min(x,y);
c=1-max(x,y);
I=find(a+b>c & a+c>b & b+c>a);
p=length(I)/N
plot(x(I),y(I),".")

clf
x=ceil(rand(1,N)*6);
mx=mean(x)
mx1=sum(x)/N
mx2=cumsum(x)./[1:N];
plot([1:N],mx2)
