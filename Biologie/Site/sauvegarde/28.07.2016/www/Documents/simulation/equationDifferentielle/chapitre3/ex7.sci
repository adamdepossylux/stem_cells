function[y]=f6(t,u)
    y(1)=4*u(1)-u(2)+t;
    y(2)=u(1)+7*u(2)+exp(-t);
endfunction

function[y]=myode(y0,t0,t,fonct)
    N=length(t);
    y=zeros(2,N);
    h=(t(N)-t(1))/(N-1);
    y(:,1)=y0;
    for i=1:N-1
        yd=y(:,i)+h*fonct(t(i),y(:,i));
        y(:,i+1)=y(:,i)+(h/2)*(fonct(t(i),y(:,i))+fonct(t(i+1),yd));
    end
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

y2=zeros(2,N);
y2(1,1)=1;
y2(2,1)=1;
for i=1:N-1
    yt=y2(:,i)+h*f6(t(i),y2(:,i));
    y2(:,i+1)=y2(:,i)+(h/2)*(f6(t(i),y2(:,i))+f6(t(i+1),yt));
end

y3=zeros(2,N);
y0=[1;1];
t0=0;
y3=ode(y0,t0,t,f6);

y4=zeros(2,N);
y4=myode(y0,t0,t,f6)


figure(1)
clf
plot2d(t,y(1,:),1)
plot2d(t,y(2,:),2)
plot2d(t,y2(1,:),4)
plot2d(t,y2(2,:),5)
plot2d(t,y3(1,:),6)
plot2d(t,y3(2,:),7)
plot2d(t,y4(1,:),9)
plot2d(t,y4(2,:),10)
legend(['Euler explicite 1','Euler explicite 2','Euler modifiée 1','Euler modifiée 2','Ode1','ode 2','myode 1','myode2'],2)

figure(2)
clf
plot2d(y4(1,:),y4(2,:),3)
plot2d(y3(1,:),y3(2,:),3)
plot2d(y2(1,:),y2(2,:),4)
plot2d(y(1,:),y(2,:),2)

legend(['myode','ode','euler explicite modifié','euler explicite'],2)
