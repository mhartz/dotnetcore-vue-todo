import Vue from 'vue';
import { Component } from 'vue-property-decorator';

interface TodoItem {
    description: string;
    done: boolean;
    id: string;
}

@Component
export default class TodoComponent extends Vue {
    todos: TodoItem[];
    newItemDescription: string;

    mounted() {
        fetch('/api/todo')
            .then(response => response.json() as Promise<TodoItem[]>)
            .then(data => {
                this.todos = data;
            });
    }

    data() {
        return {
            todos: [],
            newItemDescription: null
        };
    }
}
