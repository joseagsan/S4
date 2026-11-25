const pptxgen = require('pptxgenjs');
const M=__dirname+'/media/';
const p=new pptxgen(); p.layout='LAYOUT_WIDE'; p.theme={headFontFace:'Arial',bodyFontFace:'Arial'};
const s=p.addSlide(); const F='Arial', AZ='0B4F7A', VM='C00000', TX='141414';
s.addImage({path:M+'image3.png',x:0.45,y:0.09,w:0.99,h:1.36});
s.addImage({path:M+'image2.png',x:11.74,y:0.05,w:1.23,h:1.45});
s.addText('4ª Seção – Meios da Op Curaretinga',{x:1.93,y:0.39,w:9.47,h:0.77,isTextBox:true,fontFace:F,fontSize:32,bold:true,align:'center',color:TX,fill:{color:'0070C0',transparency:75},line:{color:'000000',width:3}});
s.addText([{text:'8 viaturas  ·  ',options:{bold:true}},{text:'60 militares na ida e 71 no retorno  ·  ',options:{bold:true}},{text:'Partida 26 NOV  |  Retorno 28 NOV',options:{color:VM,bold:true}}],{x:0.45,y:1.55,w:12.45,h:0.4,isTextBox:true,fontFace:F,fontSize:15,color:TX,align:'center',margin:0});
// tabela viaturas
const H={bold:true,color:'FFFFFF',fill:{color:AZ},fontSize:12,align:'center',valign:'middle'};
const rows=[['Nº','VIATURA','EFETIVO','CH VTR','CARGA'].map(t=>({text:t,options:H}))];
[['1','Picape','3','TC Felipe Honorato','Fardo de bagagem'],
 ['2','Picape','2 / 4','Cap Frederico','Fardo de bagagem (2 civis do IBAMA no retorno)'],
 ['3','Ônibus','25 / 34','Cap Allan Costa','Fardo de bagagem'],
 ['4','Van','16','Ten Ventilari','Fardo de bagagem'],
 ['5','Vtr 5 t','3','ST Augusto','Material ST'],
 ['6','Vtr 5 t','3','6º BEC','Material explosivo'],
 ['7','Vtr Mnt','4','Sgt Lemos','Material de Mnt Vtr'],
 ['8','Ambulância','4','Ten Rodrigues','Material de saúde']].forEach((r,i)=>rows.push(r.map((t,j)=>({text:t,options:{fontSize:12,color:TX,fill:{color:i%2?'FFFFFF':'E4F0FA'},align:(j==1||j==4||j==3)?'left':'center',valign:'middle',bold:j==1}}))));
s.addTable(rows,{x:0.45,y:2.1,w:7.6,colW:[0.45,1.25,0.95,1.85,3.1],rowH:0.39,fontFace:F,border:{type:'solid',color:AZ,pt:0.75}});
s.addText('Efetivo: ida / retorno.',{x:0.45,y:5.67,w:7.6,h:0.25,isTextBox:true,fontFace:F,fontSize:10,italic:true,color:'595959',margin:0});
// cards
const card=(y,t,linhas,cor)=>{
 s.addText(t,{x:8.35,y,w:4.55,h:0.38,isTextBox:true,fontFace:F,fontSize:14,bold:true,color:'FFFFFF',fill:{color:cor},margin:6,valign:'middle'});
 s.addText(linhas.map((l,i)=>({text:l[0],options:{bold:true,color:l[2]||TX,breakLine:false}})).flatMap((r,i)=>[r,{text:linhas[i][1],options:{color:linhas[i][2]||TX,breakLine:i<linhas.length-1}}]),
  {x:8.35,y:y+0.38,w:4.55,h:linhas.length*0.3+0.15,isTextBox:true,fontFace:F,fontSize:12,fill:{color:'E4F0FA'},line:{color:cor,width:1},margin:6,valign:'top',paraSpaceAfter:2});};
card(2.1,'COMBUSTÍVEL',[['Abastecimento: ','fechado (25 NOV)'],['Litros / tipo: ','a confirmar',VM]],AZ);
card(3.25,'ALIMENTAÇÃO (CL I)',[['Ração: ','80 R2 (cobre os 3 que já estão no local?)'],['Rancho: ','gêneros, copos, pratos, talheres, panela de pressão, botijão de gás, mat de faxina']],AZ);
card(4.62,'COMUNICAÇÕES',[['Starlink: ','1 conjunto']],AZ);
s.addText('A CONFIRMAR ATÉ A RPS:  litros de combustível  ·  cobertura das 80 rações  ·  horários de partida e retorno',{x:0.45,y:6.0,w:12.45,h:0.42,isTextBox:true,fontFace:F,fontSize:14,bold:true,color:'FFFFFF',fill:{color:VM},align:'center',valign:'middle'});
s.addText('DOCUMENTO PREPARATÓRIO – ACESSO RESTRITO',{x:3.67,y:6.56,w:6,h:0.3,isTextBox:true,fontFace:F,fontSize:11,bold:true,color:VM,align:'center'});
p.writeFile({fileName:'/home/user/S4/slides/slide_4secao_op_curaretinga.pptx'}).then(()=>console.log('ok'));
