import { FilterComponent } from '@acpaas-ui/ngx-components/utils';
import { Component, Input, OnInit } from '@angular/core';
import _ from 'lodash';

import { AbstractFilter } from '../filter/abstract-filter';

@Component({
  selector: 'aui-table-input-filter',
  templateUrl: './table-input-filter.component.html'
})
export class TableInputFilterComponent extends AbstractFilter implements OnInit, FilterComponent {
  @Input() commitOnValueChange = false;

  constructor() {
    super();
  }

  public ngOnInit() {
    this.id = `filter-${this.filter.id}-${_.uniqueId()}`;
    if ( (this.filter) && (_.isString(this.filter.value)) ) {
      this.value = this.filter.value as string;
    }
  }

  public onModelChanged(value: string) {
    if (this.commitOnValueChange) {
      this.onFilter(value);
    }
  }

  public onCommit() {
    if (!this.commitOnValueChange) {
      this.onFilter(this.value);
    }
  }
}
