variable "region" {
  description = "AWS region to deploy into"
  type        = string
  default     = "ap-northeast-1"
}

variable "project_name" {
  description = "Name prefix applied to all resources"
  type        = string
  default     = "react-resume-platform"
}

variable "image_tag" {
  description = "ECR image tag to deploy, normally the short git SHA"
  type        = string
}

variable "vpc_cidr" {
  description = "CIDR block for the VPC"
  type        = string
  default     = "10.0.0.0/16"
}

variable "container_port" {
  description = "Port the container listens on"
  type        = number
  default     = 80
}

variable "task_cpu" {
  description = "Fargate task CPU units"
  type        = number
  default     = 256
}

variable "task_memory" {
  description = "Fargate task memory in MiB"
  type        = number
  default     = 512
}

variable "desired_count" {
  description = "Number of tasks to run"
  type        = number
  default     = 1
}

variable "log_retention_days" {
  description = "CloudWatch log retention"
  type        = number
  default     = 7
}