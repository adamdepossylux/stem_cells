N=101;t0=0;t=linspace(t0,5,N)
function[y]=f(t,u)
    y(1)=u(2);
    y(2)=-u(2)-u(1);
endfunction

h=(5-0)/(N-1);
y=zeros(2,N);
y(:,1)=[1;1];
for i=1:N-1
    y(:,i+1)=y(:,i)+h*f(t,y(:,i));
end

function[y]=f3(t,u)
    y(1)=u(2);
    y(2)=-9*u(1);
endfunction

y3=zeros(2,N);
y3(:,1)=[1;1];
for i=1:N-1
    y3(:,i+1)=y3(:,i)+h*f3(t(i),y3(:,i));
end

function[y]=f2(t,u)
    y(1)=u(2);
    y(2)=4*u(2)-3*u(1);
endfunction


figure(1)
clf

plot2d(t,y2(1,:),6)
plot2d(t,y3(1,:),4)
legend(['q1','q2','q3'],4)

figure(2)
clf

plot2d(t,y2(2,:),6)
plot2d(t,y3(2,:),4)
legend(['q1','q2','q3'],4)
