clf
m=1;g=9.8;r=0.1;
function[y]=zf(x,u)
    y(1)=u(2);
    y(2)=g-(r/m)*u(2);
endfunction

function[y]=xf(x,u)
    y(1)=u(2);
    y(2)=-(r/m)*u(2);
endfunction


xmin=0 ;xmax=20 ;N=101;h=(xmax-xmin)/(N-1);
t=linspace(xmin,xmax,N);
z=zeros(N);
z=ode([0;-100],xmin,t,zf);
x=zeros(N);
x=ode([0;100],xmin,t,xf);
plot2d(x(1,:),z(1,:),5)


x1=zeros(2,N);
x1(1,1)=0;
x1(2,1)=-100;

for i=1:N-1
    x1(:,i+1)=x1(:,i)+h*xf(x(i),x1(:,i));
end

z1=zeros(2,N);
z1(1,1)=0;
z1(2,1)=100;
for i=1:N-1
    z1(:,i+1)=z1(:,i)+h*zf(x(i),z1(:,i));
end

plot2d(x1(1,:),z1(1,:),3)


