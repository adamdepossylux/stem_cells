function[x1,x2]=ex29(a,b,c)
    delta=b^2-4*a*c;
    if delta<0 then
        error('pas de solutions reélles')
    end
    x1=(-b+sqrt(delta))/(2*a)
    x2=(-b-sqrt(delta))/(2*a)
endfunction
