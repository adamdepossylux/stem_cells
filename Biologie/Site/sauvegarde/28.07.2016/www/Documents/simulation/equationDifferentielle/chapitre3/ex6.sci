clf
close
clc
clear
function[y]=f6(t,u)
    y(1)=4*u(1)-u(2)+t;
    y(2)=u(1)+7*u(2)+exp(-t);
endfunction
N=101;
h=(1-0)/(N-1)
t=linspace(0,1,101);
y=zeros(2,N);
y(1,1)=1;
y(2,1)=1;
for i=1:N-1
    y(:,i+1)=y(:,i)+h*f6(t(i),y(:,i));
end
figure(1)
clf
plot2d(t,y(1,:),1)
plot2d(t,y(2,:),2)

figure(2)
clf
plot2d(y(1,:),y(2,:),6)


