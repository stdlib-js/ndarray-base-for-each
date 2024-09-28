// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-iteration-order@v0.2.2-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-ndarraylike2object@v0.2.2-esm/index.mjs";import f from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-numel@v0.2.2-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-nullary-loop-interchange-order@v0.2.2-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-nullary-tiling-block-size@v0.2.2-esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-take-indexed@v0.2.2-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-reverse@v0.2.2-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-take-indexed@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-nullary-loop-interchange-order@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-nullary-tiling-block-size@esm/index.mjs";import c from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-reverse@esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-zero-to@esm/index.mjs";import h from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-zero-to@v0.2.1-esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-vind2bind@esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-ind2sub@esm/index.mjs";var v="throw";var j="throw";var x=[function(r,o,f){o.call(f,r.data[r.offset],[],r.ref)},function(r,o,f){var s,e,a,t,d;for(a=r.shape[0],e=r.strides[0],t=r.offset,s=r.data,d=0;d<a;d++)o.call(f,s[t],[d],r.ref),t+=e},function(r,o,f){var s,e,d,i,n,c,l,p,m,v,j;for(n=r.shape,p=r.strides,i=h(n.length),"row-major"===r.order?(c=n[1],l=n[0],e=p[1],d=p[0]-c*p[1]):(c=n[0],l=n[1],e=p[0],d=p[1]-c*p[0],i=t(i)),m=r.offset,s=r.data,j=0;j<l;j++){for(v=0;v<c;v++)o.call(f,s[m],a([j,v],i),r.ref),m+=e;m+=d}},function(r,o,f){var s,e,d,i,n,c,l,p,m,v,j,x,u,g;for(c=r.shape,v=r.strides,n=h(c.length),"row-major"===r.order?(l=c[2],p=c[1],m=c[0],e=v[2],d=v[1]-l*v[2],i=v[0]-p*v[1]):(l=c[0],p=c[1],m=c[2],e=v[0],d=v[1]-l*v[0],i=v[2]-p*v[1],n=t(n)),j=r.offset,s=r.data,g=0;g<m;g++){for(u=0;u<p;u++){for(x=0;x<l;x++)o.call(f,s[j],a([g,u,x],n),r.ref),j+=e;j+=d}j+=i}},function(r,o,f){var s,e,d,i,n,c,l,p,m,v,j,x,u,g,y,b,w;for(l=r.shape,x=r.strides,c=h(l.length),"row-major"===r.order?(p=l[3],m=l[2],v=l[1],j=l[0],e=x[3],d=x[2]-p*x[3],i=x[1]-m*x[2],n=x[0]-v*x[1]):(p=l[0],m=l[1],v=l[2],j=l[3],e=x[0],d=x[1]-p*x[0],i=x[2]-m*x[1],n=x[3]-v*x[2],c=t(c)),u=r.offset,s=r.data,w=0;w<j;w++){for(b=0;b<v;b++){for(y=0;y<m;y++){for(g=0;g<p;g++)o.call(f,s[u],a([w,b,y,g],c),r.ref),u+=e;u+=d}u+=i}u+=n}},function(r,o,f){var s,e,d,i,n,c,l,p,m,v,j,x,u,g,y,b,w,k,z,P;for(p=r.shape,g=r.strides,l=h(p.length),"row-major"===r.order?(m=p[4],v=p[3],j=p[2],x=p[1],u=p[0],e=g[4],d=g[3]-m*g[4],i=g[2]-v*g[3],n=g[1]-j*g[2],c=g[0]-x*g[1]):(m=p[0],v=p[1],j=p[2],x=p[3],u=p[4],e=g[0],d=g[1]-m*g[0],i=g[2]-v*g[1],n=g[3]-j*g[2],c=g[4]-x*g[3],l=t(l)),y=r.offset,s=r.data,P=0;P<u;P++){for(z=0;z<x;z++){for(k=0;k<j;k++){for(w=0;w<v;w++){for(b=0;b<m;b++)o.call(f,s[y],a([P,z,k,w,b],l),r.ref),y+=e;y+=d}y+=i}y+=n}y+=c}},function(r,o,f){var s,e,d,i,n,c,l,p,m,v,j,x,u,g,y,b,w,k,z,P,q,A,B;for(m=r.shape,b=r.strides,p=h(m.length),"row-major"===r.order?(v=m[5],j=m[4],x=m[3],u=m[2],g=m[1],y=m[0],e=b[5],d=b[4]-v*b[5],i=b[3]-j*b[4],n=b[2]-x*b[3],c=b[1]-u*b[2],l=b[0]-g*b[1]):(v=m[0],j=m[1],x=m[2],u=m[3],g=m[4],y=m[5],e=b[0],d=b[1]-v*b[0],i=b[2]-j*b[1],n=b[3]-x*b[2],c=b[4]-u*b[3],l=b[5]-g*b[4],p=t(p)),w=r.offset,s=r.data,B=0;B<y;B++){for(A=0;A<g;A++){for(q=0;q<u;q++){for(P=0;P<x;P++){for(z=0;z<j;z++){for(k=0;k<v;k++)o.call(f,s[w],a([B,A,q,P,z,k],p),r.ref),w+=e;w+=d}w+=i}w+=n}w+=c}w+=l}},function(r,o,f){var s,e,d,i,n,c,l,p,m,v,j,x,u,g,y,b,w,k,z,P,q,A,B,C,D,E;for(v=r.shape,k=r.strides,m=h(v.length),"row-major"===r.order?(j=v[6],x=v[5],u=v[4],g=v[3],y=v[2],b=v[1],w=v[0],e=k[6],d=k[5]-j*k[6],i=k[4]-x*k[5],n=k[3]-u*k[4],c=k[2]-g*k[3],l=k[1]-y*k[2],p=k[0]-b*k[1]):(j=v[0],x=v[1],u=v[2],g=v[3],y=v[4],b=v[5],w=v[6],e=k[0],d=k[1]-j*k[0],i=k[2]-x*k[1],n=k[3]-u*k[2],c=k[4]-g*k[3],l=k[5]-y*k[4],p=k[6]-b*k[5],m=t(m)),z=r.offset,s=r.data,E=0;E<w;E++){for(D=0;D<b;D++){for(C=0;C<y;C++){for(B=0;B<g;B++){for(A=0;A<u;A++){for(q=0;q<x;q++){for(P=0;P<j;P++)o.call(f,s[z],a([E,D,C,B,A,q,P],m),r.ref),z+=e;z+=d}z+=i}z+=n}z+=c}z+=l}z+=p}},function(r,o,f){var s,e,d,i,n,c,l,p,m,v,j,x,u,g,y,b,w,k,z,P,q,A,B,C,D,E,F,G,H;for(j=r.shape,P=r.strides,v=h(j.length),"row-major"===r.order?(x=j[7],u=j[6],g=j[5],y=j[4],b=j[3],w=j[2],k=j[1],z=j[0],e=P[7],d=P[6]-x*P[7],i=P[5]-u*P[6],n=P[4]-g*P[5],c=P[3]-y*P[4],l=P[2]-b*P[3],p=P[1]-w*P[2],m=P[0]-k*P[1]):(x=j[0],u=j[1],g=j[2],y=j[3],b=j[4],w=j[5],k=j[6],z=j[7],e=P[0],d=P[1]-x*P[0],i=P[2]-u*P[1],n=P[3]-g*P[2],c=P[4]-y*P[3],l=P[5]-b*P[4],p=P[6]-w*P[5],m=P[7]-k*P[6],v=t(v)),q=r.offset,s=r.data,H=0;H<z;H++){for(G=0;G<k;G++){for(F=0;F<w;F++){for(E=0;E<b;E++){for(D=0;D<y;D++){for(C=0;C<g;C++){for(B=0;B<u;B++){for(A=0;A<x;A++)o.call(f,s[q],a([H,G,F,E,D,C,B,A],v),r.ref),q+=e;q+=d}q+=i}q+=n}q+=c}q+=l}q+=p}q+=m}},function(r,o,f){var s,e,d,i,n,c,l,p,m,v,j,x,u,g,y,b,w,k,z,P,q,A,B,C,D,E,F,G,H,I,J,K;for(x=r.shape,A=r.strides,j=h(x.length),"row-major"===r.order?(u=x[8],g=x[7],y=x[6],b=x[5],w=x[4],k=x[3],z=x[2],P=x[1],q=x[0],e=A[8],d=A[7]-u*A[8],i=A[6]-g*A[7],n=A[5]-y*A[6],c=A[4]-b*A[5],l=A[3]-w*A[4],p=A[2]-k*A[3],m=A[1]-z*A[2],v=A[0]-P*A[1]):(u=x[0],g=x[1],y=x[2],b=x[3],w=x[4],k=x[5],z=x[6],P=x[7],q=x[8],e=A[0],d=A[1]-u*A[0],i=A[2]-g*A[1],n=A[3]-y*A[2],c=A[4]-b*A[3],l=A[5]-w*A[4],p=A[6]-k*A[5],m=A[7]-z*A[6],v=A[8]-P*A[7],j=t(j)),B=r.offset,s=r.data,K=0;K<q;K++){for(J=0;J<P;J++){for(I=0;I<z;I++){for(H=0;H<k;H++){for(G=0;G<w;G++){for(F=0;F<b;F++){for(E=0;E<y;E++){for(D=0;D<g;D++){for(C=0;C<u;C++)o.call(f,s[B],a([K,J,I,H,G,F,E,D,C],j),r.ref),B+=e;B+=d}B+=i}B+=n}B+=c}B+=l}B+=p}B+=m}B+=v}},function(r,o,f){var s,e,d,i,n,c,l,p,m,v,j,x,u,g,y,b,w,k,z,P,q,A,B,C,D,E,F,G,H,I,J,K,L,M,N;for(u=r.shape,C=r.strides,x=h(u.length),"row-major"===r.order?(g=u[9],y=u[8],b=u[7],w=u[6],k=u[5],z=u[4],P=u[3],q=u[2],A=u[1],B=u[0],e=C[9],d=C[8]-g*C[9],i=C[7]-y*C[8],n=C[6]-b*C[7],c=C[5]-w*C[6],l=C[4]-k*C[5],p=C[3]-z*C[4],m=C[2]-P*C[3],v=C[1]-q*C[2],j=C[0]-A*C[1]):(g=u[0],y=u[1],b=u[2],w=u[3],k=u[4],z=u[5],P=u[6],q=u[7],A=u[8],B=u[9],e=C[0],d=C[1]-g*C[0],i=C[2]-y*C[1],n=C[3]-b*C[2],c=C[4]-w*C[3],l=C[5]-k*C[4],p=C[6]-z*C[5],m=C[7]-P*C[6],v=C[8]-q*C[7],j=C[9]-A*C[8],x=t(x)),D=r.offset,s=r.data,N=0;N<B;N++){for(M=0;M<A;M++){for(L=0;L<q;L++){for(K=0;K<P;K++){for(J=0;J<z;J++){for(I=0;I<k;I++){for(H=0;H<w;H++){for(G=0;G<b;G++){for(F=0;F<y;F++){for(E=0;E<g;E++)o.call(f,s[D],a([N,M,L,K,J,I,H,G,F,E],x),r.ref),D+=e;D+=d}D+=i}D+=n}D+=c}D+=l}D+=p}D+=m}D+=v}D+=j}}],u=[function(r,o,f){o.call(f,r.accessors[0](r.data,r.offset),[],r.ref)},function(r,o,f){var s,e,a,t,d,i;for(t=r.shape[0],a=r.strides[0],d=r.offset,s=r.data,e=r.accessors[0],i=0;i<t;i++)o.call(f,e(s,d),[i],r.ref),d+=a},function(r,o,f){var s,e,t,d,i,n,h,p,m,v,j,x;for(n=r.shape,m=r.strides,i=l(n.length),"row-major"===r.order?(h=n[1],p=n[0],t=m[1],d=m[0]-h*m[1]):(h=n[0],p=n[1],t=m[0],d=m[1]-h*m[0],i=c(i)),v=r.offset,s=r.data,e=r.accessors[0],x=0;x<p;x++){for(j=0;j<h;j++)o.call(f,e(s,v),a([x,j],i),r.ref),v+=t;v+=d}},function(r,o,f){var s,e,d,i,n,c,l,p,m,v,j,x,u,g,y;for(l=r.shape,j=r.strides,c=h(l.length),"row-major"===r.order?(p=l[2],m=l[1],v=l[0],d=j[2],i=j[1]-p*j[2],n=j[0]-m*j[1]):(p=l[0],m=l[1],v=l[2],d=j[0],i=j[1]-p*j[0],n=j[2]-m*j[1],c=t(c)),x=r.offset,s=r.data,e=r.accessors[0],y=0;y<v;y++){for(g=0;g<m;g++){for(u=0;u<p;u++)o.call(f,e(s,x),a([y,g,u],c),r.ref),x+=d;x+=i}x+=n}},function(r,o,f){var s,e,d,i,n,c,l,p,m,v,j,x,u,g,y,b,w,k;for(p=r.shape,u=r.strides,l=h(p.length),"row-major"===r.order?(m=p[3],v=p[2],j=p[1],x=p[0],d=u[3],i=u[2]-m*u[3],n=u[1]-v*u[2],c=u[0]-j*u[1]):(m=p[0],v=p[1],j=p[2],x=p[3],d=u[0],i=u[1]-m*u[0],n=u[2]-v*u[1],c=u[3]-j*u[2],l=t(l)),g=r.offset,s=r.data,e=r.accessors[0],k=0;k<x;k++){for(w=0;w<j;w++){for(b=0;b<v;b++){for(y=0;y<m;y++)o.call(f,e(s,g),a([k,w,b,y],l),r.ref),g+=d;g+=i}g+=n}g+=c}},function(r,o,f){var s,e,d,i,n,c,l,p,m,v,j,x,u,g,y,b,w,k,z,P,q;for(m=r.shape,y=r.strides,p=h(m.length),"row-major"===r.order?(v=m[4],j=m[3],x=m[2],u=m[1],g=m[0],d=y[4],i=y[3]-v*y[4],n=y[2]-j*y[3],c=y[1]-x*y[2],l=y[0]-u*y[1]):(v=m[0],j=m[1],x=m[2],u=m[3],g=m[4],d=y[0],i=y[1]-v*y[0],n=y[2]-j*y[1],c=y[3]-x*y[2],l=y[4]-u*y[3],p=t(p)),b=r.offset,s=r.data,e=r.accessors[0],q=0;q<g;q++){for(P=0;P<u;P++){for(z=0;z<x;z++){for(k=0;k<j;k++){for(w=0;w<v;w++)o.call(f,e(s,b),a([q,P,z,k,w],p),r.ref),b+=d;b+=i}b+=n}b+=c}b+=l}},function(r,o,f){var s,e,d,i,n,c,l,p,m,v,j,x,u,g,y,b,w,k,z,P,q,A,B,C;for(v=r.shape,w=r.strides,m=h(v.length),"row-major"===r.order?(j=v[5],x=v[4],u=v[3],g=v[2],y=v[1],b=v[0],d=w[5],i=w[4]-j*w[5],n=w[3]-x*w[4],c=w[2]-u*w[3],l=w[1]-g*w[2],p=w[0]-y*w[1]):(j=v[0],x=v[1],u=v[2],g=v[3],y=v[4],b=v[5],d=w[0],i=w[1]-j*w[0],n=w[2]-x*w[1],c=w[3]-u*w[2],l=w[4]-g*w[3],p=w[5]-y*w[4],m=t(m)),k=r.offset,s=r.data,e=r.accessors[0],C=0;C<b;C++){for(B=0;B<y;B++){for(A=0;A<g;A++){for(q=0;q<u;q++){for(P=0;P<x;P++){for(z=0;z<j;z++)o.call(f,e(s,k),a([C,B,A,q,P,z],m),r.ref),k+=d;k+=i}k+=n}k+=c}k+=l}k+=p}},function(r,o,f){var s,e,d,i,n,c,l,p,m,v,j,x,u,g,y,b,w,k,z,P,q,A,B,C,D,E,F;for(j=r.shape,z=r.strides,v=h(j.length),"row-major"===r.order?(x=j[6],u=j[5],g=j[4],y=j[3],b=j[2],w=j[1],k=j[0],d=z[6],i=z[5]-x*z[6],n=z[4]-u*z[5],c=z[3]-g*z[4],l=z[2]-y*z[3],p=z[1]-b*z[2],m=z[0]-w*z[1]):(x=j[0],u=j[1],g=j[2],y=j[3],b=j[4],w=j[5],k=j[6],d=z[0],i=z[1]-x*z[0],n=z[2]-u*z[1],c=z[3]-g*z[2],l=z[4]-y*z[3],p=z[5]-b*z[4],m=z[6]-w*z[5],v=t(v)),P=r.offset,s=r.data,e=r.accessors[0],F=0;F<k;F++){for(E=0;E<w;E++){for(D=0;D<b;D++){for(C=0;C<y;C++){for(B=0;B<g;B++){for(A=0;A<u;A++){for(q=0;q<x;q++)o.call(f,e(s,P),a([F,E,D,C,B,A,q],v),r.ref),P+=d;P+=i}P+=n}P+=c}P+=l}P+=p}P+=m}},function(r,o,f){var s,e,d,i,n,c,l,p,m,v,j,x,u,g,y,b,w,k,z,P,q,A,B,C,D,E,F,G,H,I;for(x=r.shape,q=r.strides,j=h(x.length),"row-major"===r.order?(u=x[7],g=x[6],y=x[5],b=x[4],w=x[3],k=x[2],z=x[1],P=x[0],d=q[7],i=q[6]-u*q[7],n=q[5]-g*q[6],c=q[4]-y*q[5],l=q[3]-b*q[4],p=q[2]-w*q[3],m=q[1]-k*q[2],v=q[0]-z*q[1]):(u=x[0],g=x[1],y=x[2],b=x[3],w=x[4],k=x[5],z=x[6],P=x[7],d=q[0],i=q[1]-u*q[0],n=q[2]-g*q[1],c=q[3]-y*q[2],l=q[4]-b*q[3],p=q[5]-w*q[4],m=q[6]-k*q[5],v=q[7]-z*q[6],j=t(j)),A=r.offset,s=r.data,e=r.accessors[0],I=0;I<P;I++){for(H=0;H<z;H++){for(G=0;G<k;G++){for(F=0;F<w;F++){for(E=0;E<b;E++){for(D=0;D<y;D++){for(C=0;C<g;C++){for(B=0;B<u;B++)o.call(f,e(s,A),a([I,H,G,F,E,D,C,B],j),r.ref),A+=d;A+=i}A+=n}A+=c}A+=l}A+=p}A+=m}A+=v}},function(r,o,f){var s,e,d,i,n,c,l,p,m,v,j,x,u,g,y,b,w,k,z,P,q,A,B,C,D,E,F,G,H,I,J,K,L;for(u=r.shape,B=r.strides,x=h(u.length),"row-major"===r.order?(g=u[8],y=u[7],b=u[6],w=u[5],k=u[4],z=u[3],P=u[2],q=u[1],A=u[0],d=B[8],i=B[7]-g*B[8],n=B[6]-y*B[7],c=B[5]-b*B[6],l=B[4]-w*B[5],p=B[3]-k*B[4],m=B[2]-z*B[3],v=B[1]-P*B[2],j=B[0]-q*B[1]):(g=u[0],y=u[1],b=u[2],w=u[3],k=u[4],z=u[5],P=u[6],q=u[7],A=u[8],d=B[0],i=B[1]-g*B[0],n=B[2]-y*B[1],c=B[3]-b*B[2],l=B[4]-w*B[3],p=B[5]-k*B[4],m=B[6]-z*B[5],v=B[7]-P*B[6],j=B[8]-q*B[7],x=t(x)),C=r.offset,s=r.data,e=r.accessors[0],L=0;L<A;L++){for(K=0;K<q;K++){for(J=0;J<P;J++){for(I=0;I<z;I++){for(H=0;H<k;H++){for(G=0;G<w;G++){for(F=0;F<b;F++){for(E=0;E<y;E++){for(D=0;D<g;D++)o.call(f,e(s,C),a([L,K,J,I,H,G,F,E,D],x),r.ref),C+=d;C+=i}C+=n}C+=c}C+=l}C+=p}C+=m}C+=v}C+=j}},function(r,o,f){var s,e,d,i,n,c,l,p,m,v,j,x,u,g,y,b,w,k,z,P,q,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O;for(g=r.shape,D=r.strides,u=h(g.length),"row-major"===r.order?(y=g[9],b=g[8],w=g[7],k=g[6],z=g[5],P=g[4],q=g[3],A=g[2],B=g[1],C=g[0],d=D[9],i=D[8]-y*D[9],n=D[7]-b*D[8],c=D[6]-w*D[7],l=D[5]-k*D[6],p=D[4]-z*D[5],m=D[3]-P*D[4],v=D[2]-q*D[3],j=D[1]-A*D[2],x=D[0]-B*D[1]):(y=g[0],b=g[1],w=g[2],k=g[3],z=g[4],P=g[5],q=g[6],A=g[7],B=g[8],C=g[9],d=D[0],i=D[1]-y*D[0],n=D[2]-b*D[1],c=D[3]-w*D[2],l=D[4]-k*D[3],p=D[5]-z*D[4],m=D[6]-P*D[5],v=D[7]-q*D[6],j=D[8]-A*D[7],x=D[9]-B*D[8],u=t(u)),E=r.offset,s=r.data,e=r.accessors[0],O=0;O<C;O++){for(N=0;N<B;N++){for(M=0;M<A;M++){for(L=0;L<q;L++){for(K=0;K<P;K++){for(J=0;J<z;J++){for(I=0;I<k;I++){for(H=0;H<w;H++){for(G=0;G<b;G++){for(F=0;F<y;F++)o.call(f,e(s,E),a([O,N,M,L,K,J,I,H,G,F],u),r.ref),E+=d;E+=i}E+=n}E+=c}E+=l}E+=p}E+=m}E+=v}E+=j}E+=x}}],g=[function(r,o,f){var d,i,n,c,l,h,p,m,v,j,x,u,g,y,b,w,k;for(p=(k=s(r.shape,r.strides)).sh,j=k.sx,h=t(k.idx),d=e(r.dtype),x=r.offset,i=r.data,n=j[0],w=p[1];w>0;)for(w<d?(v=w,w=0):(v=d,w-=d),l=x+w*j[1],b=p[0];b>0;)for(b<d?(m=b,b=0):(m=d,b-=d),u=l+b*j[0],c=j[1]-m*j[0],y=0;y<v;y++){for(g=0;g<m;g++)o.call(f,i[u],a([y,g],h),r.ref),u+=n;u+=c}},function(r,o,f){var d,i,n,c,l,h,p,m,v,j,x,u,g,y,b,w,k,z,P,q,A,B;for(v=(B=s(r.shape,r.strides)).sh,g=B.sx,m=t(B.idx),d=e(r.dtype),y=r.offset,i=r.data,n=g[0],A=v[2];A>0;)for(A<d?(u=A,A=0):(u=d,A-=d),p=y+A*g[2],q=v[1];q>0;)for(q<d?(x=q,q=0):(x=d,q-=d),l=g[2]-x*g[1],h=p+q*g[1],P=v[0];P>0;)for(P<d?(j=P,P=0):(j=d,P-=d),b=h+P*g[0],c=g[1]-j*g[0],z=0;z<u;z++){for(k=0;k<x;k++){for(w=0;w<j;w++)o.call(f,i[b],a([z,k,w],m),r.ref),b+=n;b+=c}b+=l}},function(r,o,f){var d,i,n,c,l,h,p,m,v,j,x,u,g,y,b,w,k,z,P,q,A,B,C,D,E,F,G;for(x=(G=s(r.shape,r.strides)).sh,w=G.sx,j=t(G.idx),d=e(r.dtype),k=r.offset,i=r.data,n=w[0],F=x[3];F>0;)for(F<d?(b=F,F=0):(b=d,F-=d),v=k+F*w[3],E=x[2];E>0;)for(E<d?(y=E,E=0):(y=d,E-=d),h=w[3]-y*w[2],m=v+E*w[2],D=x[1];D>0;)for(D<d?(g=D,D=0):(g=d,D-=d),l=w[2]-g*w[1],p=m+D*w[1],C=x[0];C>0;)for(C<d?(u=C,C=0):(u=d,C-=d),z=p+C*w[0],c=w[1]-u*w[0],B=0;B<b;B++){for(A=0;A<y;A++){for(q=0;q<g;q++){for(P=0;P<u;P++)o.call(f,i[z],a([B,A,q,P],j),r.ref),z+=n;z+=c}z+=l}z+=h}},function(r,o,f){var a,i,n,c,l,h,p,m,v,j,x,u,g,y,b,w,k,z,P,q,A,B,C,D,E,F,G,H,I,J,K,L;for(g=(L=s(r.shape,r.strides)).sh,P=L.sx,u=t(L.idx),a=e(r.dtype),q=r.offset,i=r.data,n=P[0],K=g[4];K>0;)for(K<a?(z=K,K=0):(z=a,K-=a),x=q+K*P[4],J=g[3];J>0;)for(J<a?(k=J,J=0):(k=a,J-=a),p=P[4]-k*P[3],j=x+J*P[3],I=g[2];I>0;)for(I<a?(w=I,I=0):(w=a,I-=a),h=P[3]-w*P[2],v=j+I*P[2],H=g[1];H>0;)for(H<a?(b=H,H=0):(b=a,H-=a),l=P[2]-b*P[1],m=v+H*P[1],G=g[0];G>0;)for(G<a?(y=G,G=0):(y=a,G-=a),A=m+G*P[0],c=P[1]-y*P[0],F=0;F<z;F++){for(E=0;E<k;E++){for(D=0;D<w;D++){for(C=0;C<b;C++){for(B=0;B<y;B++)o.call(f,i[A],d([F,E,D,C,B],u),r.ref),A+=n;A+=c}A+=l}A+=h}A+=p}},function(r,o,f){var s,e,a,t,l,h,p,m,v,j,x,u,g,y,b,w,k,z,P,q,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,Q,R;for(b=(R=i(r.shape,r.strides)).sh,B=R.sx,y=c(R.idx),s=n(r.dtype),C=r.offset,e=r.data,a=B[0],Q=b[5];Q>0;)for(Q<s?(A=Q,Q=0):(A=s,Q-=s),g=C+Q*B[5],O=b[4];O>0;)for(O<s?(q=O,O=0):(q=s,O-=s),m=B[5]-q*B[4],u=g+O*B[4],N=b[3];N>0;)for(N<s?(P=N,N=0):(P=s,N-=s),p=B[4]-P*B[3],x=u+N*B[3],M=b[2];M>0;)for(M<s?(z=M,M=0):(z=s,M-=s),h=B[3]-z*B[2],j=x+M*B[2],L=b[1];L>0;)for(L<s?(k=L,L=0):(k=s,L-=s),l=B[2]-k*B[1],v=j+L*B[1],K=b[0];K>0;)for(K<s?(w=K,K=0):(w=s,K-=s),D=v+K*B[0],t=B[1]-w*B[0],J=0;J<A;J++){for(I=0;I<q;I++){for(H=0;H<P;H++){for(G=0;G<z;G++){for(F=0;F<k;F++){for(E=0;E<w;E++)o.call(f,e[D],d([J,I,H,G,F,E],y),r.ref),D+=a;D+=t}D+=l}D+=h}D+=p}D+=m}},function(r,o,f){var s,e,a,t,l,h,p,m,v,j,x,u,g,y,b,w,k,z,P,q,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,Q,R,S,T,U,V,W;for(k=(W=i(r.shape,r.strides)).sh,E=W.sx,w=c(W.idx),s=n(r.dtype),F=r.offset,e=r.data,a=E[0],V=k[6];V>0;)for(V<s?(D=V,V=0):(D=s,V-=s),b=F+V*E[6],U=k[5];U>0;)for(U<s?(C=U,U=0):(C=s,U-=s),v=E[6]-C*E[5],y=b+U*E[5],T=k[4];T>0;)for(T<s?(B=T,T=0):(B=s,T-=s),m=E[5]-B*E[4],g=y+T*E[4],S=k[3];S>0;)for(S<s?(A=S,S=0):(A=s,S-=s),p=E[4]-A*E[3],u=g+S*E[3],R=k[2];R>0;)for(R<s?(q=R,R=0):(q=s,R-=s),h=E[3]-q*E[2],x=u+R*E[2],Q=k[1];Q>0;)for(Q<s?(P=Q,Q=0):(P=s,Q-=s),l=E[2]-P*E[1],j=x+Q*E[1],O=k[0];O>0;)for(O<s?(z=O,O=0):(z=s,O-=s),G=j+O*E[0],t=E[1]-z*E[0],N=0;N<D;N++){for(M=0;M<C;M++){for(L=0;L<B;L++){for(K=0;K<A;K++){for(J=0;J<q;J++){for(I=0;I<P;I++){for(H=0;H<z;H++)o.call(f,e[G],d([N,M,L,K,J,I,H],w),r.ref),G+=a;G+=t}G+=l}G+=h}G+=p}G+=m}G+=v}},function(r,o,f){var s,e,a,t,l,h,p,m,v,j,x,u,g,y,b,w,k,z,P,q,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,Q,R,S,T,U,V,W,X,Y,Z,$,_;for(P=(_=i(r.shape,r.strides)).sh,H=_.sx,z=c(_.idx),s=n(r.dtype),I=r.offset,e=r.data,a=H[0],$=P[7];$>0;)for($<s?(G=$,$=0):(G=s,$-=s),k=I+$*H[7],Z=P[6];Z>0;)for(Z<s?(F=Z,Z=0):(F=s,Z-=s),j=H[7]-F*H[6],w=k+Z*H[6],Y=P[5];Y>0;)for(Y<s?(E=Y,Y=0):(E=s,Y-=s),v=H[6]-E*H[5],b=w+Y*H[5],X=P[4];X>0;)for(X<s?(D=X,X=0):(D=s,X-=s),m=H[5]-D*H[4],y=b+X*H[4],W=P[3];W>0;)for(W<s?(C=W,W=0):(C=s,W-=s),p=H[4]-C*H[3],g=y+W*H[3],V=P[2];V>0;)for(V<s?(B=V,V=0):(B=s,V-=s),h=H[3]-B*H[2],u=g+V*H[2],U=P[1];U>0;)for(U<s?(A=U,U=0):(A=s,U-=s),l=H[2]-A*H[1],x=u+U*H[1],T=P[0];T>0;)for(T<s?(q=T,T=0):(q=s,T-=s),J=x+T*H[0],t=H[1]-q*H[0],S=0;S<G;S++){for(R=0;R<F;R++){for(Q=0;Q<E;Q++){for(O=0;O<D;O++){for(N=0;N<C;N++){for(M=0;M<B;M++){for(L=0;L<A;L++){for(K=0;K<q;K++)o.call(f,e[J],d([S,R,Q,O,N,M,L,K],z),r.ref),J+=a;J+=t}J+=l}J+=h}J+=p}J+=m}J+=v}J+=j}},function(r,o,f){var s,e,a,t,l,h,p,m,v,j,x,u,g,y,b,w,k,z,P,q,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,Q,R,S,T,U,V,W,X,Y,Z,$,_,rr,or,fr,sr,er;for(A=(er=i(r.shape,r.strides)).sh,K=er.sx,q=c(er.idx),s=n(r.dtype),L=r.offset,e=r.data,a=K[0],sr=A[8];sr>0;)for(sr<s?(J=sr,sr=0):(J=s,sr-=s),P=L+sr*K[8],fr=A[7];fr>0;)for(fr<s?(I=fr,fr=0):(I=s,fr-=s),x=K[8]-I*K[7],z=P+fr*K[7],or=A[6];or>0;)for(or<s?(H=or,or=0):(H=s,or-=s),j=K[7]-H*K[6],k=z+or*K[6],rr=A[5];rr>0;)for(rr<s?(G=rr,rr=0):(G=s,rr-=s),v=K[6]-G*K[5],w=k+rr*K[5],_=A[4];_>0;)for(_<s?(F=_,_=0):(F=s,_-=s),m=K[5]-F*K[4],b=w+_*K[4],$=A[3];$>0;)for($<s?(E=$,$=0):(E=s,$-=s),p=K[4]-E*K[3],y=b+$*K[3],Z=A[2];Z>0;)for(Z<s?(D=Z,Z=0):(D=s,Z-=s),h=K[3]-D*K[2],g=y+Z*K[2],Y=A[1];Y>0;)for(Y<s?(C=Y,Y=0):(C=s,Y-=s),l=K[2]-C*K[1],u=g+Y*K[1],X=A[0];X>0;)for(X<s?(B=X,X=0):(B=s,X-=s),M=u+X*K[0],t=K[1]-B*K[0],W=0;W<J;W++){for(V=0;V<I;V++){for(U=0;U<H;U++){for(T=0;T<G;T++){for(S=0;S<F;S++){for(R=0;R<E;R++){for(Q=0;Q<D;Q++){for(O=0;O<C;O++){for(N=0;N<B;N++)o.call(f,e[M],d([W,V,U,T,S,R,Q,O,N],q),r.ref),M+=a;M+=t}M+=l}M+=h}M+=p}M+=m}M+=v}M+=j}M+=x}},function(r,o,f){var s,e,a,t,l,h,p,m,v,j,x,u,g,y,b,w,k,z,P,q,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,Q,R,S,T,U,V,W,X,Y,Z,$,_,rr,or,fr,sr,er,ar,tr,dr,ir,nr;for(C=(nr=i(r.shape,r.strides)).sh,N=nr.sx,B=c(nr.idx),s=n(r.dtype),O=r.offset,e=r.data,a=N[0],ir=C[9];ir>0;)for(ir<s?(M=ir,ir=0):(M=s,ir-=s),A=O+ir*N[9],dr=C[8];dr>0;)for(dr<s?(L=dr,dr=0):(L=s,dr-=s),u=N[9]-L*N[8],q=A+dr*N[8],tr=C[7];tr>0;)for(tr<s?(K=tr,tr=0):(K=s,tr-=s),x=N[8]-K*N[7],P=q+tr*N[7],ar=C[6];ar>0;)for(ar<s?(J=ar,ar=0):(J=s,ar-=s),j=N[7]-J*N[6],z=P+ar*N[6],er=C[5];er>0;)for(er<s?(I=er,er=0):(I=s,er-=s),v=N[6]-I*N[5],k=z+er*N[5],sr=C[4];sr>0;)for(sr<s?(H=sr,sr=0):(H=s,sr-=s),m=N[5]-H*N[4],w=k+sr*N[4],fr=C[3];fr>0;)for(fr<s?(G=fr,fr=0):(G=s,fr-=s),p=N[4]-G*N[3],b=w+fr*N[3],or=C[2];or>0;)for(or<s?(F=or,or=0):(F=s,or-=s),h=N[3]-F*N[2],y=b+or*N[2],rr=C[1];rr>0;)for(rr<s?(E=rr,rr=0):(E=s,rr-=s),l=N[2]-E*N[1],g=y+rr*N[1],_=C[0];_>0;)for(_<s?(D=_,_=0):(D=s,_-=s),Q=g+_*N[0],t=N[1]-D*N[0],$=0;$<M;$++){for(Z=0;Z<L;Z++){for(Y=0;Y<K;Y++){for(X=0;X<J;X++){for(W=0;W<I;W++){for(V=0;V<H;V++){for(U=0;U<G;U++){for(T=0;T<F;T++){for(S=0;S<E;S++){for(R=0;R<D;R++)o.call(f,e[Q],d([$,Z,Y,X,W,V,U,T,S,R],B),r.ref),Q+=a;Q+=t}Q+=l}Q+=h}Q+=p}Q+=m}Q+=v}Q+=j}Q+=x}Q+=u}}],y=[function(r,o,f){var d,i,n,c,l,h,p,m,v,j,x,u,g,y,b,w,k,z;for(m=(z=s(r.shape,r.strides)).sh,x=z.sx,p=t(z.idx),d=e(r.dtype),u=r.offset,i=r.data,c=x[0],n=r.accessors[0],k=m[1];k>0;)for(k<d?(j=k,k=0):(j=d,k-=d),h=u+k*x[1],w=m[0];w>0;)for(w<d?(v=w,w=0):(v=d,w-=d),g=h+w*x[0],l=x[1]-v*x[0],b=0;b<j;b++){for(y=0;y<v;y++)o.call(f,n(i,g),a([b,y],p),r.ref),g+=c;g+=l}},function(r,o,f){var d,i,n,c,l,h,p,m,v,j,x,u,g,y,b,w,k,z,P,q,A,B,C;for(j=(C=s(r.shape,r.strides)).sh,y=C.sx,v=t(C.idx),d=e(r.dtype),b=r.offset,i=r.data,c=y[0],n=r.accessors[0],B=j[2];B>0;)for(B<d?(g=B,B=0):(g=d,B-=d),m=b+B*y[2],A=j[1];A>0;)for(A<d?(u=A,A=0):(u=d,A-=d),h=y[2]-u*y[1],p=m+A*y[1],q=j[0];q>0;)for(q<d?(x=q,q=0):(x=d,q-=d),w=p+q*y[0],l=y[1]-x*y[0],P=0;P<g;P++){for(z=0;z<u;z++){for(k=0;k<x;k++)o.call(f,n(i,w),a([P,z,k],v),r.ref),w+=c;w+=l}w+=h}},function(r,o,f){var d,i,n,c,l,h,p,m,v,j,x,u,g,y,b,w,k,z,P,q,A,B,C,D,E,F,G,H;for(u=(H=s(r.shape,r.strides)).sh,k=H.sx,x=t(H.idx),d=e(r.dtype),z=r.offset,i=r.data,c=k[0],n=r.accessors[0],G=u[3];G>0;)for(G<d?(w=G,G=0):(w=d,G-=d),j=z+G*k[3],F=u[2];F>0;)for(F<d?(b=F,F=0):(b=d,F-=d),p=k[3]-b*k[2],v=j+F*k[2],E=u[1];E>0;)for(E<d?(y=E,E=0):(y=d,E-=d),h=k[2]-y*k[1],m=v+E*k[1],D=u[0];D>0;)for(D<d?(g=D,D=0):(g=d,D-=d),P=m+D*k[0],l=k[1]-g*k[0],C=0;C<w;C++){for(B=0;B<b;B++){for(A=0;A<y;A++){for(q=0;q<g;q++)o.call(f,n(i,P),a([C,B,A,q],x),r.ref),P+=c;P+=l}P+=h}P+=p}},function(r,o,f){var d,i,n,c,l,h,p,m,v,j,x,u,g,y,b,w,k,z,P,q,A,B,C,D,E,F,G,H,I,J,K,L,M;for(y=(M=s(r.shape,r.strides)).sh,q=M.sx,g=t(M.idx),d=e(r.dtype),A=r.offset,i=r.data,c=q[0],n=r.accessors[0],L=y[4];L>0;)for(L<d?(P=L,L=0):(P=d,L-=d),u=A+L*q[4],K=y[3];K>0;)for(K<d?(z=K,K=0):(z=d,K-=d),m=q[4]-z*q[3],x=u+K*q[3],J=y[2];J>0;)for(J<d?(k=J,J=0):(k=d,J-=d),p=q[3]-k*q[2],j=x+J*q[2],I=y[1];I>0;)for(I<d?(w=I,I=0):(w=d,I-=d),h=q[2]-w*q[1],v=j+I*q[1],H=y[0];H>0;)for(H<d?(b=H,H=0):(b=d,H-=d),B=v+H*q[0],l=q[1]-b*q[0],G=0;G<P;G++){for(F=0;F<z;F++){for(E=0;E<k;E++){for(D=0;D<w;D++){for(C=0;C<b;C++)o.call(f,n(i,B),a([G,F,E,D,C],g),r.ref),B+=c;B+=l}B+=h}B+=p}B+=m}},function(r,o,f){var d,i,n,c,l,h,p,m,v,j,x,u,g,y,b,w,k,z,P,q,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,Q,R,S;for(w=(S=s(r.shape,r.strides)).sh,C=S.sx,b=t(S.idx),d=e(r.dtype),D=r.offset,i=r.data,c=C[0],n=r.accessors[0],R=w[5];R>0;)for(R<d?(B=R,R=0):(B=d,R-=d),y=D+R*C[5],Q=w[4];Q>0;)for(Q<d?(A=Q,Q=0):(A=d,Q-=d),v=C[5]-A*C[4],g=y+Q*C[4],O=w[3];O>0;)for(O<d?(q=O,O=0):(q=d,O-=d),m=C[4]-q*C[3],u=g+O*C[3],N=w[2];N>0;)for(N<d?(P=N,N=0):(P=d,N-=d),p=C[3]-P*C[2],x=u+N*C[2],M=w[1];M>0;)for(M<d?(z=M,M=0):(z=d,M-=d),h=C[2]-z*C[1],j=x+M*C[1],L=w[0];L>0;)for(L<d?(k=L,L=0):(k=d,L-=d),E=j+L*C[0],l=C[1]-k*C[0],K=0;K<B;K++){for(J=0;J<A;J++){for(I=0;I<q;I++){for(H=0;H<P;H++){for(G=0;G<z;G++){for(F=0;F<k;F++)o.call(f,n(i,E),a([K,J,I,H,G,F],b),r.ref),E+=c;E+=l}E+=h}E+=p}E+=m}E+=v}},function(r,o,f){var d,i,n,c,l,h,p,m,v,j,x,u,g,y,b,w,k,z,P,q,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,Q,R,S,T,U,V,W,X;for(z=(X=s(r.shape,r.strides)).sh,F=X.sx,k=t(X.idx),d=e(r.dtype),G=r.offset,i=r.data,c=F[0],n=r.accessors[0],W=z[6];W>0;)for(W<d?(E=W,W=0):(E=d,W-=d),w=G+W*F[6],V=z[5];V>0;)for(V<d?(D=V,V=0):(D=d,V-=d),j=F[6]-D*F[5],b=w+V*F[5],U=z[4];U>0;)for(U<d?(C=U,U=0):(C=d,U-=d),v=F[5]-C*F[4],y=b+U*F[4],T=z[3];T>0;)for(T<d?(B=T,T=0):(B=d,T-=d),m=F[4]-B*F[3],g=y+T*F[3],S=z[2];S>0;)for(S<d?(A=S,S=0):(A=d,S-=d),p=F[3]-A*F[2],u=g+S*F[2],R=z[1];R>0;)for(R<d?(q=R,R=0):(q=d,R-=d),h=F[2]-q*F[1],x=u+R*F[1],Q=z[0];Q>0;)for(Q<d?(P=Q,Q=0):(P=d,Q-=d),H=x+Q*F[0],l=F[1]-P*F[0],O=0;O<E;O++){for(N=0;N<D;N++){for(M=0;M<C;M++){for(L=0;L<B;L++){for(K=0;K<A;K++){for(J=0;J<q;J++){for(I=0;I<P;I++)o.call(f,n(i,H),a([O,N,M,L,K,J,I],k),r.ref),H+=c;H+=l}H+=h}H+=p}H+=m}H+=v}H+=j}},function(r,o,f){var d,i,n,c,l,h,p,m,v,j,x,u,g,y,b,w,k,z,P,q,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,Q,R,S,T,U,V,W,X,Y,Z,$,_,rr;for(q=(rr=s(r.shape,r.strides)).sh,I=rr.sx,P=t(rr.idx),d=e(r.dtype),J=r.offset,i=r.data,c=I[0],n=r.accessors[0],_=q[7];_>0;)for(_<d?(H=_,_=0):(H=d,_-=d),z=J+_*I[7],$=q[6];$>0;)for($<d?(G=$,$=0):(G=d,$-=d),x=I[7]-G*I[6],k=z+$*I[6],Z=q[5];Z>0;)for(Z<d?(F=Z,Z=0):(F=d,Z-=d),j=I[6]-F*I[5],w=k+Z*I[5],Y=q[4];Y>0;)for(Y<d?(E=Y,Y=0):(E=d,Y-=d),v=I[5]-E*I[4],b=w+Y*I[4],X=q[3];X>0;)for(X<d?(D=X,X=0):(D=d,X-=d),m=I[4]-D*I[3],y=b+X*I[3],W=q[2];W>0;)for(W<d?(C=W,W=0):(C=d,W-=d),p=I[3]-C*I[2],g=y+W*I[2],V=q[1];V>0;)for(V<d?(B=V,V=0):(B=d,V-=d),h=I[2]-B*I[1],u=g+V*I[1],U=q[0];U>0;)for(U<d?(A=U,U=0):(A=d,U-=d),K=u+U*I[0],l=I[1]-A*I[0],T=0;T<H;T++){for(S=0;S<G;S++){for(R=0;R<F;R++){for(Q=0;Q<E;Q++){for(O=0;O<D;O++){for(N=0;N<C;N++){for(M=0;M<B;M++){for(L=0;L<A;L++)o.call(f,n(i,K),a([T,S,R,Q,O,N,M,L],P),r.ref),K+=c;K+=l}K+=h}K+=p}K+=m}K+=v}K+=j}K+=x}},function(r,o,f){var d,i,n,c,l,h,p,m,v,j,x,u,g,y,b,w,k,z,P,q,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,Q,R,S,T,U,V,W,X,Y,Z,$,_,rr,or,fr,sr,er,ar;for(B=(ar=s(r.shape,r.strides)).sh,L=ar.sx,A=t(ar.idx),d=e(r.dtype),M=r.offset,i=r.data,c=L[0],n=r.accessors[0],er=B[8];er>0;)for(er<d?(K=er,er=0):(K=d,er-=d),q=M+er*L[8],sr=B[7];sr>0;)for(sr<d?(J=sr,sr=0):(J=d,sr-=d),u=L[8]-J*L[7],P=q+sr*L[7],fr=B[6];fr>0;)for(fr<d?(I=fr,fr=0):(I=d,fr-=d),x=L[7]-I*L[6],z=P+fr*L[6],or=B[5];or>0;)for(or<d?(H=or,or=0):(H=d,or-=d),j=L[6]-H*L[5],k=z+or*L[5],rr=B[4];rr>0;)for(rr<d?(G=rr,rr=0):(G=d,rr-=d),v=L[5]-G*L[4],w=k+rr*L[4],_=B[3];_>0;)for(_<d?(F=_,_=0):(F=d,_-=d),m=L[4]-F*L[3],b=w+_*L[3],$=B[2];$>0;)for($<d?(E=$,$=0):(E=d,$-=d),p=L[3]-E*L[2],y=b+$*L[2],Z=B[1];Z>0;)for(Z<d?(D=Z,Z=0):(D=d,Z-=d),h=L[2]-D*L[1],g=y+Z*L[1],Y=B[0];Y>0;)for(Y<d?(C=Y,Y=0):(C=d,Y-=d),N=g+Y*L[0],l=L[1]-C*L[0],X=0;X<K;X++){for(W=0;W<J;W++){for(V=0;V<I;V++){for(U=0;U<H;U++){for(T=0;T<G;T++){for(S=0;S<F;S++){for(R=0;R<E;R++){for(Q=0;Q<D;Q++){for(O=0;O<C;O++)o.call(f,n(i,N),a([X,W,V,U,T,S,R,Q,O],A),r.ref),N+=c;N+=l}N+=h}N+=p}N+=m}N+=v}N+=j}N+=x}N+=u}},function(r,o,f){var d,i,n,c,l,h,p,m,v,j,x,u,g,y,b,w,k,z,P,q,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,Q,R,S,T,U,V,W,X,Y,Z,$,_,rr,or,fr,sr,er,ar,tr,dr,ir,nr,cr;for(D=(cr=s(r.shape,r.strides)).sh,O=cr.sx,C=t(cr.idx),d=e(r.dtype),Q=r.offset,i=r.data,c=O[0],n=r.accessors[0],nr=D[9];nr>0;)for(nr<d?(N=nr,nr=0):(N=d,nr-=d),B=Q+nr*O[9],ir=D[8];ir>0;)for(ir<d?(M=ir,ir=0):(M=d,ir-=d),g=O[9]-M*O[8],A=B+ir*O[8],dr=D[7];dr>0;)for(dr<d?(L=dr,dr=0):(L=d,dr-=d),u=O[8]-L*O[7],q=A+dr*O[7],tr=D[6];tr>0;)for(tr<d?(K=tr,tr=0):(K=d,tr-=d),x=O[7]-K*O[6],P=q+tr*O[6],ar=D[5];ar>0;)for(ar<d?(J=ar,ar=0):(J=d,ar-=d),j=O[6]-J*O[5],z=P+ar*O[5],er=D[4];er>0;)for(er<d?(I=er,er=0):(I=d,er-=d),v=O[5]-I*O[4],k=z+er*O[4],sr=D[3];sr>0;)for(sr<d?(H=sr,sr=0):(H=d,sr-=d),m=O[4]-H*O[3],w=k+sr*O[3],fr=D[2];fr>0;)for(fr<d?(G=fr,fr=0):(G=d,fr-=d),p=O[3]-G*O[2],b=w+fr*O[2],or=D[1];or>0;)for(or<d?(F=or,or=0):(F=d,or-=d),h=O[2]-F*O[1],y=b+or*O[1],rr=D[0];rr>0;)for(rr<d?(E=rr,rr=0):(E=d,rr-=d),R=y+rr*O[0],l=O[1]-E*O[0],_=0;_<N;_++){for($=0;$<M;$++){for(Z=0;Z<L;Z++){for(Y=0;Y<K;Y++){for(X=0;X<J;X++){for(W=0;W<I;W++){for(V=0;V<H;V++){for(U=0;U<G;U++){for(T=0;T<F;T++){for(S=0;S<E;S++)o.call(f,n(i,R),a([_,$,Z,Y,X,W,V,U,T,S],C),r.ref),R+=c;R+=l}R+=h}R+=p}R+=m}R+=v}R+=j}R+=x}R+=u}R+=g}}],b=x.length-1;function w(s,e,a){var t,d,i;return 0===(t=(d=(i=o(s[0])).shape).length)?i.accessorProtocol?u[t](i,e,a):x[t](i,e,a):0!==f(d)?t<=b&&0!==r(i.strides)?i.accessorProtocol?u[t](i,e,a):x[t](i,e,a):t<=b?i.accessorProtocol?y[t-2](i,e,a):g[t-2](i,e,a):i.accessorProtocol?function(r,o,s){var e,a,t,d,i,n,c,l,h,j;for(n=r.shape,t=f(n),e=r.data,c=r.strides,l=r.offset,a=r.order,d=r.accessors[0],j=0;j<t;j++)h=p(n,c,l,a,j,v),i=m(n,c,0,a,j,v),o.call(s,d(e,h),i,r.ref)}(i,e,a):void function(r,o,s){var e,a,t,d,i,n,c,l,h;for(i=r.shape,t=f(i),e=r.data,n=r.strides,c=r.offset,a=r.order,h=0;h<t;h++)l=p(i,n,c,a,h,j),d=m(i,n,0,a,h,j),o.call(s,e[l],d,r.ref)}(i,e,a):void 0}export{w as default};
//# sourceMappingURL=index.mjs.map
