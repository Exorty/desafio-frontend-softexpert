import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'food-frontend';
  mostrarPedidosEnviados = false;

  pedidoData: any = {
    pedidos: [
      {
        nomeResponsavel: '',
        itensPedido: [{ descricaoItem: '', valorItem: null }]
      }
    ],
    descontoEmReais: null,
    acrescimoEmPorcentagem: null,
    valorEntrega: null,
    formaPagamento: 'PICPAY',
    tipoEstabelecimentoEnum: 'VIRTUAL'
  };

  pedidosEnviados: any[] = [];

  constructor(private http: HttpClient) { }

  adicionarPedido() {
    this.pedidoData.pedidos.push({
      nomeResponsavel: '',
      itensPedido: [{ descricaoItem: '', valorItem: null }]
    });
  }

  adicionarItem(pedido: any, pedidoIndex: number) {
    this.pedidoData.pedidos[pedidoIndex].itensPedido.push({
      descricaoItem: '',
      valorItem: null
    });
  }

  processarPedido() {
    const endpoint = 'http://localhost:8080/softexpert/conta/dividir';
    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    this.http.post<any[]>(endpoint, this.pedidoData, { headers }).subscribe(
      (response) => {
        console.log('Resposta do backend:', response);
        this.pedidosEnviados = response;
        this.mostrarPedidosEnviados = true;
      },
      (error) => {
        console.error('Erro ao enviar requisição:', error);
      }
    );
  }

  voltarAoFormulario() {
    this.mostrarPedidosEnviados = false;
    this.resetarPedidoData();
  }

  private resetarPedidoData() {
    this.pedidoData = {
      pedidos: [
        {
          nomeResponsavel: '',
          itensPedido: [{ descricaoItem: '', valorItem: null }]
        }
      ],
      descontoEmReais: null,
      valorEntrega: null,
      formaPagamento: 'PICPAY',
      tipoEstabelecimentoEnum: 'VIRTUAL'
    };


  }

  ajustarCamposPorTipoEstabelecimento() {
    if (this.pedidoData.tipoEstabelecimentoEnum === 'FISICO') {
      this.pedidoData.descontoEmReais = null;
      this.pedidoData.valorEntrega = null;
    } else if (this.pedidoData.tipoEstabelecimentoEnum === 'VIRTUAL') {
      this.pedidoData.descontoEmPorcentagem = null;
    }
  }
}
