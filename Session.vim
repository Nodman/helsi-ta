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
badd +2 ~/repos/helsi-ta/src/components/RFFForm/useFormConfig.tsx
badd +1 ~/repos/helsi-ta/src/components/Root/Root.tsx
badd +2 ~/repos/helsi-ta/src/utils/chunk.ts
badd +1 ~/repos/helsi-ta/src/utils/form-formatters.ts
badd +1 ~/repos/helsi-ta/src/utils/form-validators.ts
badd +1 ~/repos/helsi-ta/src/hooks/use-input-toggle.tsx
badd +1 ~/repos/helsi-ta/src/hooks/use-toggle.ts
badd +1 ~/repos/helsi-ta/src/components/UserForm/config.ts
badd +1 ~/repos/helsi-ta/src/components/UserForm/UserForm.module.css
badd +2 ~/repos/helsi-ta/src/components/UserForm/UserForm.tsx
badd +1 ~/repos/helsi-ta/src/components/RFFForm/Form.tsx
badd +1 ~/repos/helsi-ta/src/components/RFFForm/InputDate.tsx
badd +1 ~/repos/helsi-ta/src/components/RFFForm/InputSelect.tsx
badd +1 ~/repos/helsi-ta/src/components/RFFForm/InputText.tsx
badd +0 ~/repos/helsi-ta/src/components/ColorSchemeToggle/ColorSchemeToggle.tsx
argglobal
%argdel
edit ~/repos/helsi-ta/src/components/ColorSchemeToggle/ColorSchemeToggle.tsx
argglobal
balt ~/repos/helsi-ta/src/components/RFFForm/useFormConfig.tsx
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
let s:l = 1 - ((0 * winheight(0) + 26) / 52)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 1
normal! 0
tabnext 1
if exists('s:wipebuf') && len(win_findbuf(s:wipebuf)) == 0 && getbufvar(s:wipebuf, '&buftype') isnot# 'terminal'
  silent exe 'bwipe ' . s:wipebuf
endif
unlet! s:wipebuf
set winheight=1 winwidth=20
let &shortmess = s:shortmess_save
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
