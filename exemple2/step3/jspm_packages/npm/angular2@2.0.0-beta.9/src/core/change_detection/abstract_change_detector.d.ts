import { ChangeDetectorRef } from './change_detector_ref';
import { DirectiveIndex } from './directive_record';
import { ChangeDetector, ChangeDispatcher } from './interfaces';
import { Pipes } from './pipes';
import { BindingTarget } from './binding_record';
import { Locals } from './parser/locals';
import { ChangeDetectionStrategy, ChangeDetectorState } from './constants';
export declare class AbstractChangeDetector<T> implements ChangeDetector {
    id: string;
    numberOfPropertyProtoRecords: number;
    bindingTargets: BindingTarget[];
    directiveIndices: DirectiveIndex[];
    strategy: ChangeDetectionStrategy;
    contentChildren: any[];
    viewChildren: any[];
    parent: ChangeDetector;
    ref: ChangeDetectorRef;
    state: ChangeDetectorState;
    context: T;
    locals: Locals;
    mode: ChangeDetectionStrategy;
    pipes: Pipes;
    propertyBindingIndex: number;
    outputSubscriptions: any[];
    dispatcher: ChangeDispatcher;
    constructor(id: string, numberOfPropertyProtoRecords: number, bindingTargets: BindingTarget[], directiveIndices: DirectiveIndex[], strategy: ChangeDetectionStrategy);
    addContentChild(cd: ChangeDetector): void;
    removeContentChild(cd: ChangeDetector): void;
    addViewChild(cd: ChangeDetector): void;
    removeViewChild(cd: ChangeDetector): void;
    remove(): void;
    handleEvent(eventName: string, elIndex: number, event: any): boolean;
    handleEventInternal(eventName: string, elIndex: number, locals: Locals): boolean;
    detectChanges(): void;
    checkNoChanges(): void;
    runDetectChanges(throwOnChange: boolean): void;
    detectChangesInRecords(throwOnChange: boolean): void;
    detectChangesInRecordsInternal(throwOnChange: boolean): void;
    hydrate(context: T, locals: Locals, dispatcher: ChangeDispatcher, pipes: Pipes): void;
    hydrateDirectives(dispatcher: ChangeDispatcher): void;
    dehydrate(): void;
    dehydrateDirectives(destroyPipes: boolean): void;
    hydrated(): boolean;
    destroyRecursive(): void;
    afterContentLifecycleCallbacks(): void;
    afterContentLifecycleCallbacksInternal(): void;
    afterViewLifecycleCallbacks(): void;
    afterViewLifecycleCallbacksInternal(): void;
    markAsCheckOnce(): void;
    markPathToRootAsCheckOnce(): void;
    private _unsubscribeFromOutputs();
    getDirectiveFor(directives: any, index: number): any;
    getDetectorFor(directives: any, index: number): ChangeDetector;
    notifyDispatcher(value: any): void;
    logBindingUpdate(value: any): void;
    addChange(changes: {
        [key: string]: any;
    }, oldValue: any, newValue: any): {
        [key: string]: any;
    };
    private _throwError(exception, stack);
    throwOnChangeError(oldValue: any, newValue: any): void;
    throwDehydratedError(detail: string): void;
    private _currentBinding();
}
