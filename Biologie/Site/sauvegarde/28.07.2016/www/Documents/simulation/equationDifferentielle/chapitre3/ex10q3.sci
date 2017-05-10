function[y]=f3(t,u)
    y(1)=u(2);
    y(2)=-9*u(1);
endfunction

clf
N=101;t=linspace(%pi/2,5,N);
h=(5-%pi/2)/(N-1);

y=zeros(2,N);
y(:,1)=[0;1];
for i=1:N-1
    y(:,i+1)=y(:,i)+h*f3(t(i),y(:,i));
end

plot2d(t,y(1,:),4)
plot2d(t,y(2,:),4)
