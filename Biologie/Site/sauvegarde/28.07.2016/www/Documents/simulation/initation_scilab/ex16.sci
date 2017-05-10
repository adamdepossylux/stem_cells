t=0:%pi/20:2*%pi;
plot2d(t,sin(t),1)
plot2d(t,exp(sin(t)),8)
title('sin et exp(sint)')
xlabel('t axis')
ylabel('y axis')
legend('sin(t)','exp(sin(t))')
