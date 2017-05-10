function[y]=f2(t,u)
    y(1)=u(2);
    y(2)=-4*u(2)-3*u(1);
endfunction

N=101;
t0=0;
t=linspace(t0,5,N);
h=(5-0)/(N-1);
y2=zeros(2,N);
y2(:,1)=[1;1];
for i=1:N-1
    yd=y2(:,i)+h*f2(t(i),y2(:,i));
    y2(:,i+1)=y2(:,i)+(h/2)*(f2(t(:,i),y2(:,i))+f2(t(:,i+1),yd));
end

plot2d(t,y2(1,:),5)
plot2d(t,y2(2,:),3)
legend(['1','2'],3)
