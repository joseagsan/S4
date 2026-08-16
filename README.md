# Controle de Viaturas — S4

Aplicativo web de página única (`index.html`) para controle de frota na função
S4 (logística), com apoio às rotinas de Fiscal Administrativo. Roda inteiramente
no navegador — sem backend, sem build — e guarda os dados em `localStorage`.

## Uso

Abra `index.html` em qualquer navegador (ou sirva a pasta com um servidor
estático). Não há passo de instalação.

## Funcionalidades

- Cadastro de viaturas: placa/nr EB, chassi, placa civil, tipo, marca/modelo,
  ano, quilometragem, responsável, foto.
- Situação da viatura: Operacional, Em manutenção, Baixada.
- Classificação por categoria: Operacional (Op) ou Administrativa (Adm),
  editável direto na tabela.
- Painel de disponibilidade: KPIs, gráfico de rosca por situação, gráfico de
  barras por tipo de viatura e comparação de disponibilidade por categoria.
- Busca e filtros (placa, chassi, modelo, tipo, categoria, situação) e
  ordenação por coluna.
- Registro de última e próxima manutenção (data e tipo).
- Exportação e importação dos dados em JSON ou CSV (cópia de segurança /
  transferência entre dispositivos).
- Carga inicial com 36 viaturas de exemplo da planilha de controle da frota
  (apenas na primeira execução, quando não há dados salvos no navegador).

## Dados

Tudo fica salvo apenas no `localStorage` do navegador (`s4.controleViaturas.v1`).
Use **Exportar** regularmente para gerar uma cópia de segurança ou levar os
dados para outro dispositivo/navegador.

## Referência doutrinária

- `EB70-MC-10.238` — Manual de Campanha *Logística Militar Terrestre* (2ª Ed., 2022, COTER)
- `EB70-MC-10.223` — Manual de Campanha *Operações* (5ª Ed., 2017)
- `EB10-R-01.003` — Regulamento de Administração do Exército (RAE), Título IV

Ver notas completas em [`docs/S4-e-Fiscal-Administrativo.md`](docs/S4-e-Fiscal-Administrativo.md).
