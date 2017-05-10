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

plot2d(x(1,:),z(1,:),2)

teta=linspace(0,90,11)*(%pi/180);
clf
x0=0;
z0=0;
xmin=0 ;xmax=20 ;N=101;
t=linspace(xmin,xmax,11);
M=11;
distance=zeros(1,M);
for i=1:M-1
    x=ode([x0;30*cos(teta(i))],0,teta,xf);
    z=ode([z0;-30*sin(teta(i))],0,teta,zf);
    plot2d(x(1,:),z(1,:));
    indz=find(z(1,:)<0);
    gagnant=length(indz);//instant où le project ile tompbe par terre
    //distance(i)=x(1,gagnant);
end
[max_distance,yg]=max(distance);
//teta(ig):meilleur angle
//max_distance:meilleur distance
