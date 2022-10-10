let SessionLoad = 1
let s:so_save = &g:so | let s:siso_save = &g:siso | setg so=0 siso=0 | setl so=-1 siso=-1
let v:this_session=expand("<sfile>:p")
silent only
silent tabonly
cd ~/repos/helsi-ta
if expand('%') == '' && !&modified && line('$') <= 1 && getline(1) == ''
  let s:wipebuf = bufnr('%')
endif
let s:shortmess_save = &shortmess
if &shortmess =~ 'A'
  set shortmess=aoOA
else
  set shortmess=aoO
endif
badd +3 ~/repos/helsi-ta/src/index.tsx
badd +2 ~/repos/helsi-ta/src/App.tsx
badd +12 ~/repos/helsi-ta/src/components/Providers/Providers.tsx
badd +1 ~/repos/helsi-ta/src/components/Providers/index.ts
badd +10 ~/repos/helsi-ta/src/components/Root/Root.tsx
badd +1 ~/repos/helsi-ta/src/components/Root/index.ts
badd +1 ~/repos/helsi-ta/src/components/Form/index.ts
badd +9 ~/repos/helsi-ta/src/components/Form/Form.tsx
badd +2 ~/repos/helsi-ta/src/components/Form/Form.module.css
badd +7 ~/repos/helsi-ta/src/components/ColorSchemeToggle/ColorSchemeToggle.tsx
badd +1 ~/repos/helsi-ta/src/components/ColorSchemeToggle/index.ts
badd +5 ~/repos/helsi-ta/package.json
argglobal
%argdel
edit ~/repos/helsi-ta/package.json
let s:save_splitbelow = &splitbelow
let s:save_splitright = &splitright
set splitbelow splitright
wincmd _ | wincmd |
vsplit
1wincmd h
wincmd w
let &splitbelow = s:save_splitbelow
let &splitright = s:save_splitright
wincmd t
let s:save_winminheight = &winminheight
let s:save_winminwidth = &winminwidth
set winminheight=0
set winheight=1
set winminwidth=0
set winwidth=1
exe 'vert 1resize ' . ((&columns * 149 + 82) / 165)
exe 'vert 2resize ' . ((&columns * 15 + 82) / 165)
argglobal
balt ~/repos/helsi-ta/src/components/Providers/Providers.tsx
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal fen
silent! normal! zE
let &fdl = &fdl
let s:l = 5 - ((4 * winheight(0) + 22) / 44)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 5
normal! 06|
wincmd w
argglobal
if bufexists(fnamemodify("~/repos/helsi-ta/src/components/Form/Form.module.css", ":p")) | buffer ~/repos/helsi-ta/src/components/Form/Form.module.css | else | edit ~/repos/helsi-ta/src/components/Form/Form.module.css | endif
if &buftype ==# 'terminal'
  silent file ~/repos/helsi-ta/src/components/Form/Form.module.css
endif
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal fen
silent! normal! zE
let &fdl = &fdl
let s:l = 3 - ((2 * winheight(0) + 22) / 44)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 3
normal! 0
wincmd w
exe 'vert 1resize ' . ((&columns * 149 + 82) / 165)
exe 'vert 2resize ' . ((&columns * 15 + 82) / 165)
tabnext 1
if exists('s:wipebuf') && len(win_findbuf(s:wipebuf)) == 0 && getbufvar(s:wipebuf, '&buftype') isnot# 'terminal'
  silent exe 'bwipe ' . s:wipebuf
endif
unlet! s:wipebuf
set winheight=1 winwidth=20
let &shortmess = s:shortmess_save
let &winminheight = s:save_winminheight
let &winminwidth = s:save_winminwidth
let s:sx = expand("<sfile>:p:r")."x.vim"
if filereadable(s:sx)
  exe "source " . fnameescape(s:sx)
endif
let &g:so = s:so_save | let &g:siso = s:siso_save
set hlsearch
nohlsearch
let g:this_session = v:this_session
let g:this_obsession = v:this_session
doautoall SessionLoadPost
unlet SessionLoad
" vim: set ft=vim :
