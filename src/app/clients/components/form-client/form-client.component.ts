import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { StateClient } from '../../enums/state-client';
import { Client } from '../../models/client';

@Component({
  selector: 'app-form-client',
  templateUrl: './form-client.component.html',
  styleUrls: ['./form-client.component.scss']
})
export class FormClientComponent {
  @Input() public init!: Client;
  @Output() public submitted: EventEmitter<Client>;

  public form!: FormGroup;
  public states: string[];

  constructor(private formBuilder: FormBuilder) {
    this.states = Object.values(StateClient);
    this.submitted = new EventEmitter();
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      id: [this.init.id],
      name: [this.init.name],
      totalCaHt: [this.init.totalCaHt],
      tva: [this.init.tva],
      state: [this.init.state],
      comment: [this.init.comment]
    })
  }

  public onSubmit(): void {
    this.submitted.emit(this.form.value);
  }
}
