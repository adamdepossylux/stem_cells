//ex13
theta=45*%pi/180;

x0=0; vx0=30*cos(30);
z0=0; vz0=-30*(sin(30));

x1=ode([x0;vx0],0,theta,xf);
z1=ode([z0;vz0],0,theta,zf);
