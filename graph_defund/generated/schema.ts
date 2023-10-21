// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class AddProject extends Entity {
  constructor(id: Bytes) {
    super();
    this.set("id", Value.fromBytes(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save AddProject entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.BYTES,
        `Entities of type AddProject must have an ID of type Bytes but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("AddProject", id.toBytes().toHexString(), this);
    }
  }

  static loadInBlock(id: Bytes): AddProject | null {
    return changetype<AddProject | null>(
      store.get_in_block("AddProject", id.toHexString())
    );
  }

  static load(id: Bytes): AddProject | null {
    return changetype<AddProject | null>(
      store.get("AddProject", id.toHexString())
    );
  }

  get id(): Bytes {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set id(value: Bytes) {
    this.set("id", Value.fromBytes(value));
  }

  get maker(): Bytes {
    let value = this.get("maker");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set maker(value: Bytes) {
    this.set("maker", Value.fromBytes(value));
  }

  get _project(): BigInt {
    let value = this.get("_project");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set _project(value: BigInt) {
    this.set("_project", Value.fromBigInt(value));
  }
}

export class FundedProject extends Entity {
  constructor(id: Bytes) {
    super();
    this.set("id", Value.fromBytes(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save FundedProject entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.BYTES,
        `Entities of type FundedProject must have an ID of type Bytes but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("FundedProject", id.toBytes().toHexString(), this);
    }
  }

  static loadInBlock(id: Bytes): FundedProject | null {
    return changetype<FundedProject | null>(
      store.get_in_block("FundedProject", id.toHexString())
    );
  }

  static load(id: Bytes): FundedProject | null {
    return changetype<FundedProject | null>(
      store.get("FundedProject", id.toHexString())
    );
  }

  get id(): Bytes {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set id(value: Bytes) {
    this.set("id", Value.fromBytes(value));
  }

  get funder(): Bytes {
    let value = this.get("funder");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set funder(value: Bytes) {
    this.set("funder", Value.fromBytes(value));
  }

  get maker(): Bytes {
    let value = this.get("maker");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set maker(value: Bytes) {
    this.set("maker", Value.fromBytes(value));
  }

  get _project(): BigInt {
    let value = this.get("_project");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set _project(value: BigInt) {
    this.set("_project", Value.fromBigInt(value));
  }

  get amount(): BigInt {
    let value = this.get("amount");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set amount(value: BigInt) {
    this.set("amount", Value.fromBigInt(value));
  }

  get erc20ContractAddress(): Bytes {
    let value = this.get("erc20ContractAddress");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set erc20ContractAddress(value: Bytes) {
    this.set("erc20ContractAddress", Value.fromBytes(value));
  }
}
