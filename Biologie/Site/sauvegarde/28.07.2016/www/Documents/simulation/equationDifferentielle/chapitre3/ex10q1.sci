N=101;
t0=0;
t=linspace(t0,5,N);
function[y]=f(t,u)
    y(1)=u(2);
    y(2)=-u(2)-u(1);
endfunction
clf
h=(5-0)/(N-1);
y=zeros(2,N);
y(:,1)=[1;1];
for i=1:N-1
    y(:,i+1)=y(:,i)+h*f(t(i),y(:,i));
end

plot2d(t,y(1,:),5)
plot2d(t,y(2,:),3)
